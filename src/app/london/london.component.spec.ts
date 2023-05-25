import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonComponent } from './london.component';

describe('LondonComponent', () => {
  let component: LondonComponent;
  let fixture: ComponentFixture<LondonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LondonComponent]
    });
    fixture = TestBed.createComponent(LondonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
