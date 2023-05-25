import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesContentComponent } from './cities-content.component';

describe('CitiesContentComponent', () => {
  let component: CitiesContentComponent;
  let fixture: ComponentFixture<CitiesContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitiesContentComponent]
    });
    fixture = TestBed.createComponent(CitiesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
