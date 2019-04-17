import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/Hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
 
  constructor(private heroService: HeroService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}