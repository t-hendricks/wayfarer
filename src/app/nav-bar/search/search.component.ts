import { Component } from '@angular/core';
import { cities } from '../../data/citiesdata';
import { posts, Posts } from '../../data/postsdata';
import { ActivatedRoute, Route } from '@angular/router';
import { NavBarComponent } from '../nav-bar.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  cities = cities;
  title: string = '';
  posts: Posts[] = [];
  post: Posts | undefined;

  constructor(private route: ActivatedRoute) {}


  findTitle(title: string) {
    console.log("HERE IS THE DANG TITLE: " + title);
    this.route.paramMap.subscribe(params => {
      const paramPostId: string = params.get('postId') || '';
      this.posts = cities.flatMap(city => city.posts);
      this.post = this.posts.find(post => post.id === parseInt(paramPostId));
      let filterPosts = posts.filter(post => post.title.toLowerCase().includes(this.title));
      console.log(filterPosts);
      
      
    });
  }
}
