import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cities } from '../data/citiesdata';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  title: string = '';
  cities = cities;

  constructor(private router: Router) {}

  searchTitle(title: string) {
    this.router.navigate(['/search'], {
      queryParams: { searchTerm: title}
    })    
  }
}
