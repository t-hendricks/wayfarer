import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { cities } from '../data/citiesdata';

@Component({
  selector: 'app-cities-content',
  templateUrl: './cities-content.component.html',
  styleUrls: ['./cities-content.component.css']
})
export class CitiesContentComponent implements OnInit {
  city: any;
  cityWeather: any;

  constructor(private route: ActivatedRoute, private http: HttpClient){}

  /**
   * The ngOnInit method initialises the cities-content component and grabs' the city route's parameter in the URL.
   * The id parameter that is grabbed is used to find the corresponding city from the citiesdata.ts file through the city's id.
   * If a city exists, the findWeather method is called using the city's name.
   */
  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        const paramId: string = params.get('id') || '';
        this.city = cities.find(city => city.id === parseInt(paramId));
        if (this.city) {
          this.findWeather(this.city.name);
        }
      });
  }

  /**
   * The findWeather method grabs the weather data for a given city name from the OpenWeather API.
   * The weather data is a JSON object that is assigned to the cityWeather property of the CitiesContentComponent class.
   * @param name is the name of the city we are retreiving weather data for.
   */
  findWeather(name: string): void {
    this.http
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=052f26926ae9784c2d677ca7bc5dec98&units=imperial`)
      .subscribe((response) => {
        console.log(response);
        this.cityWeather = response
      });
  }
}