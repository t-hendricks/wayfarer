import { Component } from '@angular/core';
import { cities } from '../data/citiesdata';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  cities = cities;
}
