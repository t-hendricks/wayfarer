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
   * The ngOnInit method grabs the value from the observable 'searchTerm' query parameter inside the url, 
   * then invokes findPostByTitle() function.
   */
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const searchTerm = params['searchTerm'];
      this.findPostByTitle(searchTerm);
    })
  }

  /**
   * The findPostByTitle takes in a string and filters though an array of 'posts' from the data folder.
   * 
   * @param searchTerm {string} is the string to search for in all posts' titles.
   */
  findPostByTitle(searchTerm: string): void {
    this.posts = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
