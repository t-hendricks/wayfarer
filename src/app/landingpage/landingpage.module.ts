import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { TopicComponent } from './topic/topic.component';
import { LandingpageComponent } from './landingpage.component';



@NgModule({
  declarations: [
    HeroComponent,
    TopicComponent,
    LandingpageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    TopicComponent,
    LandingpageComponent
  ]
})
export class LandingpageModule { }
