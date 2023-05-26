import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app.routing.module';
import { CitiesNavComponent } from './cities-nav/cities-nav.component';
import { CitiesContentComponent } from './cities-content/cities-content.component';
import { LandingpageModule } from './landingpage/landingpage.module';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CitiesNavComponent,
    CitiesContentComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }