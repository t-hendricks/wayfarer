import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanfranciscoHeroComponent } from './sanfrancisco-hero.component';

describe('SanfranciscoHeroComponent', () => {
  let component: SanfranciscoHeroComponent;
  let fixture: ComponentFixture<SanfranciscoHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanfranciscoHeroComponent]
    });
    fixture = TestBed.createComponent(SanfranciscoHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
