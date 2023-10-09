import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
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

}
