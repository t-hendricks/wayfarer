import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CitiesNavComponent } from './cities-nav/cities-nav.component';
import { CitiesContentComponent } from './cities-content/cities-content.component';
import { LandingpageModule } from './landingpage/landingpage.module';
import { PostComponent } from './post/post.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
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