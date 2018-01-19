import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  constructor(private userService: UserService) {}

  hero: Hero;
  lastDbId = 9;
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero(){
    this.hero = new Hero(this.lastDbId, this.model.name , this.model.alterEgo, this.model.power);
    this.userService.postData(this.hero);
    this.lastDbId++
    console.log(this.hero, this.lastDbId);
  }

}
