import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from './hero';
import { HeroesComponent  } from './heroes/heroes.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private route:ActivatedRoute){
    
  }
  
  title = 'angular-hero-app';
  hero : Hero = { id: 11, name: 'Batman', imageUrl: "https://image.cnbcfm.com/api/v1/image/105814861-1553608877209ben-affleck-batman-1.jpg?v=1553609938&w=1600&h=900" }
}
