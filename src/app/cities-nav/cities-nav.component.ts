import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cities } from '../citiesdata';

@Component({
  selector: 'app-cities-nav',
  templateUrl: './cities-nav.component.html',
  styleUrls: ['./cities-nav.component.css']
})
export class CitiesNavComponent {
  cities = cities;

  constructor (private router: Router) {}

  pathForCity(cityId: number): void {
    this.router.navigate([`cities/$(cityId)`]);
  }
}