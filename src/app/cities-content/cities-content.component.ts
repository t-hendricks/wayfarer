import { Component, OnInit } from '@angular/core';
import { cities, Cities, Posts } from '../citiesdata';
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
  post: any;
  // city: Cities | undefined;
  // post: Posts | undefined

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


  // ngOnInit() {
  //   this.route.paramMap.subscribe(params => {
  //     let paramId: string = params.get('id') || '';
  //     let paramPostId: string = params.getAll('id')[1] || '';
  
  //     this.city = cities.find(city => city.id === parseInt(paramId));
  //     this.post = this.city?.posts.find(post => post.id === parseInt(paramPostId));
  //   });
  // }  

}
