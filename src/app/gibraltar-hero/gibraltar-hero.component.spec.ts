import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GibraltarHeroComponent } from './gibraltar-hero.component';

describe('GibraltarHeroComponent', () => {
  let component: GibraltarHeroComponent;
  let fixture: ComponentFixture<GibraltarHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GibraltarHeroComponent]
    });
    fixture = TestBed.createComponent(GibraltarHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
