import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PostComponent } from './post.component';
import { posts } from '../data/postsdata';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Tests if the post's title is between 1 and 200 characters using the validatePostTitle method in the post.component.ts file.
   */
  describe('title', () => {
    it('should have a length between 1 and 200 characters', () => {
      for (let post of posts) {
        let validTitle = component.validatePostTitle(post.title);
        expect(validTitle).toBeTrue();
      }
    })
  });

  /**
   * Tests if the post's content is not empty using the validatePostContent method in the post.component.ts file.
   */
  describe('content', () => {
    it('should not be empty', () => {
      for (let post of posts) {
        let validContent = component.validatePostContent(post.content);
        expect(validContent).toBeTrue();
      }
    })
  });
});
