import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { TopicComponent } from './topic/topic.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AppRoutingModule } from './app-routing-module';
import { CitiesNavComponent } from './cities-nav/cities-nav.component';
import { LondonContentComponent } from './london-content/london-content.component';
import { GibraltarContentComponent } from './gibraltar-content/gibraltar-content.component';
import { SanfranciscoContentComponent } from './sanfrancisco-content/sanfrancisco-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroComponent,
    TopicComponent,
    HomepageComponent,
    LandingpageComponent,
    CitiesNavComponent,
    LondonContentComponent,
    GibraltarContentComponent,
    SanfranciscoContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }