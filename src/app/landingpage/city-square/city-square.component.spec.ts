import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySquareComponent } from './city-square.component';

describe('CitySquareComponent', () => {
  let component: CitySquareComponent;
  let fixture: ComponentFixture<CitySquareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitySquareComponent]
    });
    fixture = TestBed.createComponent(CitySquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
