import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { TopicComponent } from './topic/topic.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AppRoutingModule } from './app-routing-module';
import { SanfranciscoContentComponent } from './sanfrancisco-page/sanfrancisco-content/sanfrancisco-content.component';
import { SanfranciscoPageComponent } from './sanfrancisco-page/sanfrancisco-page.component';
import { SanfranciscoNavComponent } from './sanfrancisco-page/sanfrancisco-nav/sanfrancisco-nav.component';
import { CitiespageComponent } from './citiespage/citiespage.component';
import { CitiesNavComponent } from './cities-nav/cities-nav.component';
import { LondonContentComponent } from './london/london-content/london-content.component';
import { GibraltarContentComponent } from './gibraltar/gibraltar-content/gibraltar-content.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GibraltarComponent } from './gibraltar/gibraltar.component';
import { LondonComponent } from './london/london.component';
import { GibraltarHeroComponent } from './gibraltar-hero/gibraltar-hero.component';
import { SanfranciscoHeroComponent } from './sanfrancisco-hero/sanfrancisco-hero.component';
import { LondonHeroComponent } from './london-hero/london-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroComponent,
    TopicComponent,
    HomepageComponent,
    LandingpageComponent,
    SanfranciscoPageComponent,
    SanfranciscoContentComponent,
    SanfranciscoNavComponent,
    CitiespageComponent,
    CitiesNavComponent,
    LondonContentComponent,
    GibraltarContentComponent,
    NavigationComponent,
    GibraltarComponent,
    LondonComponent,
    GibraltarHeroComponent,
    SanfranciscoHeroComponent,
    LondonHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }