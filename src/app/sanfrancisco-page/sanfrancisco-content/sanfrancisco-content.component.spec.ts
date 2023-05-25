import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanfranciscoContentComponent } from './sanfrancisco-content.component';

describe('SanfranciscoContentComponent', () => {
  let component: SanfranciscoContentComponent;
  let fixture: ComponentFixture<SanfranciscoContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanfranciscoContentComponent]
    });
    fixture = TestBed.createComponent(SanfranciscoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
