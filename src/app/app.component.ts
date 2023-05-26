import { Component } from '@angular/core';
import { cities } from './data/citiesdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wayfarer';
  cities = cities;
}
