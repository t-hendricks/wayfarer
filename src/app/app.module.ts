import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { LandingpageModule } from './landingpage/landingpage.module';
import { NavBarModule } from './nav-bar/nav-bar.module';

import { AppComponent } from './app.component';
import { CitiesNavComponent } from './cities-nav/cities-nav.component';
import { CitiesContentComponent } from './cities-content/cities-content.component';
import { PostComponent } from './post/post.component';
import { FooterComponent } from './landingpage/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesNavComponent,
    CitiesContentComponent,
    PostComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingpageModule,
    NavBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }