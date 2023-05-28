import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySquareComponent } from './city-square.component';
import { AppRoutingModule } from 'src/app/app.routing.module';

describe('CitySquareComponent', () => {
  let component: CitySquareComponent;
  let fixture: ComponentFixture<CitySquareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitySquareComponent],
      imports: [AppRoutingModule]
    });
    fixture = TestBed.createComponent(CitySquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
