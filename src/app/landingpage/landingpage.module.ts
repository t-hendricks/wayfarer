import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app.routing.module';

import { HeroComponent } from './hero/hero.component';
import { TopicComponent } from './topic/topic.component';
import { LandingpageComponent } from './landingpage.component';
import { CitySquareComponent } from './city-square/city-square.component';


@NgModule({
  declarations: [
    HeroComponent,
    TopicComponent,
    LandingpageComponent,
    CitySquareComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeroComponent,
    TopicComponent,
    LandingpageComponent
  ]
})
export class LandingpageModule { }
