import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonHeroComponent } from './london-hero.component';

describe('LondonHeroComponent', () => {
  let component: LondonHeroComponent;
  let fixture: ComponentFixture<LondonHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LondonHeroComponent]
    });
    fixture = TestBed.createComponent(LondonHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
