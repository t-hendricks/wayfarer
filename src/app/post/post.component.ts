import { Component, OnInit } from '@angular/core';
import { cities } from '../citiesdata'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {

}

// export class PostComponent implements OnInit {
//   cities = cities;
//   postIndex: string | null = '';
//   post: any;

//   constructor(private route: ActivatedRoute) { }

//     ngOnInit() {
//     this.route.paramMap
//     .subscribe( params => {
//       this.post = cities.find( post => {
//         let paramId: string = params.getAll('id')[1] || '';
//         return post.id === parseInt(paramId);
//       });    
//     });
//   }
// }
