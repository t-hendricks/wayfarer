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

  /**
   * The ngOnInit method initialized the post component and grabs the post route's parameter in the URL.
   * The postId parameter that is grabbed is used to find the corresponding post from the postsdata.ts file through the post's id.
   */
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const paramPostId: string = params.get('postId') || '';
      this.URLposts = cities.flatMap(city => city.posts);
      this.post = this.URLposts.find(post => post.id === parseInt(paramPostId));
    });    
  }

  /**
   * The validatePostTitle method is used to validate that the post's title is between 1 and 200 characters in length.
   * @param postTitle is the post's title to be validated.
   * @returns false if the post's title is not between 1 and 200 characters in length, and true otherwise.
   */
  validatePostTitle(postTitle: string): boolean {
    for (let post of this.posts) {
      if (!(post.title.length >= 1 && post.title.length <= 200)) {
        return false;
      }
    }
    return true;
  }

  /**
   * The validatePostContent method is used to validate that the post's content is not empty.
   * @param postContent is the post's content to be validated.
   * @returns false if the post's content is empty (with a length of 0 characters), and true otherwise.
   */
  validatePostContent(postContent: string): boolean {
    for (let post of this.posts) {
      if (post.content.length === 0) {
        return false;
      }
    }
    return true;
  }
}
