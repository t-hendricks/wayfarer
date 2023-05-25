import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesNavComponent } from './cities-nav.component';

describe('CitiesNavComponent', () => {
  let component: CitiesNavComponent;
  let fixture: ComponentFixture<CitiesNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitiesNavComponent]
    });
    fixture = TestBed.createComponent(CitiesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
