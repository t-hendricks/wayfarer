import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { cities } from '../citiesdata';

@Component({
  selector: 'app-citiespage',
  templateUrl: './citiespage.component.html',
  styleUrls: ['./citiespage.component.css']
})
export class CitiespageComponent implements OnInit {
  cities = cities;

  cityIndex: string|null = ''; //set up public class member

  constructor(private route: ActivatedRoute) { } //make URL routes available to class
 
  ngOnInit() {
      this.route.paramMap
      .subscribe( params => {
          this.cityIndex = params.get('id');
      });
  }
}