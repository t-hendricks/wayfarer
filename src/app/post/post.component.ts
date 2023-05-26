import { Component, OnInit } from '@angular/core';
import { cities } from '../data/citiesdata';
import { Posts } from '../data/postsdata';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  post: Posts | undefined;
  posts: Posts[] = [];

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const paramPostId: string = params.get('postId') || '';
      this.posts = cities.flatMap(city => city.posts);
      this.post = this.posts.find(post => post.id === parseInt(paramPostId));
    });    
  }
}
