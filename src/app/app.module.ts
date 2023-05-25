import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { TopicComponent } from './topic/topic.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AppRoutingModule } from './app-routing-module';
import { CitiespageComponent } from './citiespage/citiespage.component';
import { CitiespageModule } from './citiespage/citiespage.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroComponent,
    TopicComponent,
    HomepageComponent,
    LandingpageComponent,
    CitiespageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CitiespageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }