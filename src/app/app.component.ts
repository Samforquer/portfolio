import { Component } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sam Forquer - Portfolio';
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}
