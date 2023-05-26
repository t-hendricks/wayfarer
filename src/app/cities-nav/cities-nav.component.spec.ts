import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesNavComponent } from './cities-nav.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CitiesNavComponent', () => {
  let component: CitiesNavComponent;
  let fixture: ComponentFixture<CitiesNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitiesNavComponent],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(CitiesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
