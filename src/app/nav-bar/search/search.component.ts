import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts } from 'src/app/data/postsdata';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  posts = posts;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const searchTerm = params['searchTerm'];
      this.findPostByTitle(searchTerm);
    })
  }

  findPostByTitle(searchTerm: string) {
    this.posts = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
