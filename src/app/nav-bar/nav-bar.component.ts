import { Component, OnInit } from '@angular/core';
import { cities } from '../data/citiesdata';
import { posts, Posts } from '../data/postsdata';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  cities = cities;
  posts = posts;
  title: string = '';
  filterPosts: Posts[] = [];
  post: Posts | undefined;

  constructor(private route: ActivatedRoute) {}

  // ngOnInit() {
  //   this.posts.subscribe(title => {
  //     console.log(title);
  //   })
  // }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   const paramPostId: string = params.get('postId') || '';
    //   this.posts = cities.flatMap(city => city.posts);
    //   this.post = this.posts.find(post => post.id === parseInt(paramPostId));
    //   posts.forEach(post => console.log(post.title.startsWith(this.title)));
      
    // });    
  }

  findTitle(title: string) {
    console.log("HERE IS THE DANG TITLE: " + title);
    this.route.paramMap.subscribe(params => {
      const paramPostId: string = params.get('postId') || '';
      this.filterPosts = cities.flatMap(city => city.posts);
      this.post = this.filterPosts.find(post => post.id === parseInt(paramPostId));
      this.filterPosts = posts.filter(post => post.title.toLowerCase().includes(this.title));
      // console.log(filterPosts);
      console.log(this.filterPosts);
      this.title = this.filterPosts[0].title;
      
    });
  }
}
