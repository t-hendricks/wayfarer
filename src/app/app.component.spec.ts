import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppComponent, 
      NavBarComponent
    ],
    imports: [
      RouterTestingModule
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
