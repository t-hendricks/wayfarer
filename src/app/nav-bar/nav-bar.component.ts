import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  title: string = '';

  constructor(private router: Router) {}

  searchTitle(title: string) {
    this.router.navigate(['/search'], {
      queryParams: { searchTerm: title}
    })    
  }
}
