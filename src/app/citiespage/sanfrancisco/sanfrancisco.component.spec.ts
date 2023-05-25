import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanfranciscoComponent } from './sanfrancisco.component';

describe('SanfranciscoComponent', () => {
  let component: SanfranciscoComponent;
  let fixture: ComponentFixture<SanfranciscoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanfranciscoComponent]
    });
    fixture = TestBed.createComponent(SanfranciscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
