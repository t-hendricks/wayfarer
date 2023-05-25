import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanfranciscoPageComponent } from './sanfrancisco-page.component';

describe('SanfranciscoPageComponent', () => {
  let component: SanfranciscoPageComponent;
  let fixture: ComponentFixture<SanfranciscoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanfranciscoPageComponent]
    });
    fixture = TestBed.createComponent(SanfranciscoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
