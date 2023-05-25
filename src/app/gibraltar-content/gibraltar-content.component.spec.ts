import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GibraltarContentComponent } from './gibraltar-content.component';

describe('GibraltarContentComponent', () => {
  let component: GibraltarContentComponent;
  let fixture: ComponentFixture<GibraltarContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GibraltarContentComponent]
    });
    fixture = TestBed.createComponent(GibraltarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
