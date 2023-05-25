import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanfranciscoNavComponent } from './sanfrancisco-nav.component';

describe('SanfranciscoNavComponent', () => {
  let component: SanfranciscoNavComponent;
  let fixture: ComponentFixture<SanfranciscoNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanfranciscoNavComponent]
    });
    fixture = TestBed.createComponent(SanfranciscoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
