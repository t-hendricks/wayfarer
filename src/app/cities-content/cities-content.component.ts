import { Component, OnInit } from '@angular/core';
import { cities } from '../citiesdata';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cities-content',
  templateUrl: './cities-content.component.html',
  styleUrls: ['./cities-content.component.css']
})
export class CitiesContentComponent implements OnInit {
  cities = cities;
  cityIndex: string | null = '';
  city: any;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.paramMap
    .subscribe( params => {
      this.city = cities.find( city => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      });    
    });
  }

}
