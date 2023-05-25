import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiespageComponent } from './citiespage.component';

describe('CitiespageComponent', () => {
  let component: CitiespageComponent;
  let fixture: ComponentFixture<CitiespageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitiespageComponent]
    });
    fixture = TestBed.createComponent(CitiespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
