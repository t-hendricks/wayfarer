import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts } from 'src/app/data/postsdata';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  posts = posts; // used for structural directives

  constructor(private route: ActivatedRoute) {}

  /**
   * Grabs the value from the observable 'searchTerm' query parameter 
   * inside the url, then invokes findPostByTitle() function.
   * 
   */
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const searchTerm = params['searchTerm'];
      this.findPostByTitle(searchTerm);
    })
  }

  /**
   * Takes in a string and filters though an array of 'posts' from the data folder.
   * 
   * @param searchTerm {string}
   */
  findPostByTitle(searchTerm: string) {
    this.posts = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
