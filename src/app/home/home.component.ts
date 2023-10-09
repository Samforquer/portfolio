import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private http: HttpClient) { }

  profileData: any;

ngOnInit() {
  this.fetchGithubProfile();
}

fetchGithubProfile() {
  const apiUrl = 'https://api.github.com/users/Samforquer';

  this.http.get(apiUrl).subscribe(
    (data: any) => {
      this.profileData = data;
    },
    error => {
      console.error('Error fetching GitHub profile:', error);
    }
  );
}

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faExternalLinkAlt = faExternalLinkAlt;
}
