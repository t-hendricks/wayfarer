import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonContentComponent } from './london-content.component';

describe('LondonContentComponent', () => {
  let component: LondonContentComponent;
  let fixture: ComponentFixture<LondonContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LondonContentComponent]
    });
    fixture = TestBed.createComponent(LondonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
