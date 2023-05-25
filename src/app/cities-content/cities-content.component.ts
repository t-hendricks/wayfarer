import { Component } from '@angular/core';
import { cities } from '../citiesdata';

@Component({
  selector: 'app-cities-content',
  templateUrl: './cities-content.component.html',
  styleUrls: ['./cities-content.component.css']
})
export class CitiesContentComponent {
  cities = cities;
}
