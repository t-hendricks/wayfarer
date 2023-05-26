import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesContentComponent } from './cities-content.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CitiesNavComponent } from '../cities-nav/cities-nav.component';

describe('CitiesContentComponent', () => {
  let component: CitiesContentComponent;
  let fixture: ComponentFixture<CitiesContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitiesContentComponent, CitiesNavComponent],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(CitiesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

