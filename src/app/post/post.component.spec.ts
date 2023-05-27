import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { RouterTestingModule } from '@angular/router/testing';
import { posts, Posts } from '../data/postsdata';

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

  describe('title', () => {
    it('should have a length between 1 and 200 characters', () => {
      for (let post of posts) {
        let validTitle = component.validatePostTitle(post.title);
        expect(validTitle).toBeTrue();
      }
    })
  });
});
