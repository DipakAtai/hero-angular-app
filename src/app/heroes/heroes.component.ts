import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero : Hero = {
  //   id: 11,
  //   name : "Spiderman",
  //   imageUrl: "https://flxt.tmsimg.com/assets/p34442_p_v10_ar.jpg"
  // };
  heroes = HEROES;

  selectedHero ?:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero = hero;

  }
  constructor() { }

  ngOnInit(): void {
  }
  

}
