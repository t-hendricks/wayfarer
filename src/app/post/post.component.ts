import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { cities } from '../data/citiesdata';
import { posts, Posts } from '../data/postsdata';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  post: Posts | undefined;
  posts = posts;
  URLposts: Posts[] = [];

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const paramPostId: string = params.get('postId') || '';
      this.URLposts = cities.flatMap(city => city.posts);
      this.post = this.URLposts.find(post => post.id === parseInt(paramPostId));
    });    
  }

  validatePostTitle(postTitle: string): boolean {
    for (let post of this.posts) {
      if (!(post.title.length >= 1 && post.title.length <= 200)) {
        return false;
      }
    }
    return true;
  }

  validatePostContent(postContent: string): boolean {
    for (let post of this.posts) {
      if (post.content.length === 0) {
        return false;
      }
    }
    return true;
  }
}
