import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { TopicComponent } from './topic/topic.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AppRoutingModule } from './app-routing-module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroComponent,
    TopicComponent,
    HomepageComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     component: LandingpageComponent
    //   },
    //   {
    //     path: 'home',
    //     component: HomepageComponent
    //   }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }