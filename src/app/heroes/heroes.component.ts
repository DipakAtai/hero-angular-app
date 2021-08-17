import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
//   // heroes = HEROES;
// hero: Hero | undefined = undefined ;
  
  constructor(private heroService: HeroService,private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }
  // showHero(hero:Hero){
  //   this.hero = hero;
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}




// ########################################################
// import { Component, OnInit } from '@angular/core';
// import {Hero} from '../hero';
// import { HEROES } from '../mock-heroes';

// import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
// import { HeroService } from '../hero.service';

// import { MessageService } from '../message.service';


// @Component({
//   selector: 'app-heroes',
//   templateUrl: './heroes.component.html',
//   styleUrls: ['./heroes.component.scss']
// })
// export class HeroesComponent implements OnInit {

//   // hero : Hero = {
//   //   id: 11,
//   //   name : "Spiderman",
//   //   imageUrl: "https://flxt.tmsimg.com/assets/p34442_p_v10_ar.jpg"
//   // };
//   // heroes = HEROES;

//   selectedHero ?:Hero;

//     heroes: Hero[] = [];
//   // onSelect(hero:Hero):void{
//   //   this.selectedHero = hero;

//   // }
//   constructor(private heroService: HeroService, private messageService: MessageService) { }
//   ngOnInit(): void {
//     this.getHeroes()
//   }

//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//     this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
//   }
  
//   getHeroes(): void {
//     this.heroService.getHeroes()
//         .subscribe(heroes => this.heroes = heroes);
//   }
 
  

// }
