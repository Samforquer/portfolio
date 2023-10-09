import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
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
}
