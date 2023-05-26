import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageComponent } from './landingpage.component';
import { HeroComponent } from './hero/hero.component';
import { TopicComponent } from './topic/topic.component';

describe('LandingpageComponent', () => {
  let component: LandingpageComponent;
  let fixture: ComponentFixture<LandingpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LandingpageComponent,
        HeroComponent,
        TopicComponent
      ]
    });
    fixture = TestBed.createComponent(LandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
