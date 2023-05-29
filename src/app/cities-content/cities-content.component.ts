import { Component, OnInit } from '@angular/core';
import { cities } from '../data/citiesdata';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cities-content',
  templateUrl: './cities-content.component.html',
  styleUrls: ['./cities-content.component.css']
})
export class CitiesContentComponent implements OnInit {
  city: any;
  cityWeather: any;

  constructor(private route: ActivatedRoute, private http: HttpClient){}

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const paramId: string = params.get('id') || '';
        this.city = cities.find(city => city.id === parseInt(paramId));
        if (this.city) {
          this.findWeather(this.city.name);
        }
      });
  }

  findWeather(name: string): void {
    this.http
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=052f26926ae9784c2d677ca7bc5dec98&units=imperial`)
      .subscribe((response) => {
        console.log(response);
        this.cityWeather = response
      });
  }
}