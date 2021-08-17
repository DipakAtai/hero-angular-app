import { Component, OnInit, Input,DoCheck } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit,DoCheck {

  constructor( 
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ) { 
      this.getHero();
      this.getHeroes();

  }
  heroes: Hero[] = [];
  @Input() hero ?: Hero; 
  ngOnInit(): void {
    console.log(this.hero)
    this.getHero();
    this.getHeroes();
    
  }
  ngDoCheck(){
    this.getHero();
    this.getHeroes();
  }
  ngOnChanges():void{
    console.log(this.hero)
    this.getHero();
    this.getHeroes();
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
      console.log("From getHero");
    // this.heroService.getHeroes()
    //   .subscribe(heroes => this.heroes = heroes);
  }
  onClicked(){
    console.log(this.hero)
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
    console.log("getHeroes")
    console.log(this.heroes)
  }


  // closeCard(){
    
  //   console.log("Close Button")
  // }
  goBack(): void {
    this.location.back();
  }

}
