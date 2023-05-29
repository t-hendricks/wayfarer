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
  cities = cities; // used for structural directive

  constructor(private router: Router) {}

  /**
   * Takes in a title string to pass in a query parameter with 
   * queryParams, which navigates to the '/search' route imperatively 
   * using Router.navigate.
   * 
   * @param title {string}
   */
  searchTitle(title: string) {
    this.router.navigate(['/search'], {
      queryParams: { searchTerm: title}
    })    
  }
}
