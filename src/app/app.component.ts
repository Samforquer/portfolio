import { Component } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { //fader,
           slider } from './route-animations';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    slider, 
   // transformer, 
    //fader//, 
    //stepper
  ]
})
export class AppComponent {
  title = 'Sam Forquer - Portfolio';
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
