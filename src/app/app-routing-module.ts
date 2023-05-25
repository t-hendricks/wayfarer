import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeroComponent } from './hero/hero.component';
import { TopicComponent } from './topic/topic.component';
import { SanfranciscoPageComponent } from './sanfrancisco-page/sanfrancisco-page.component';

const routes: Routes = [
    {
        path: '',
        component: LandingpageComponent,
        children: [
            {
                path: '',
                component: HeroComponent
            },
            {
                path: '',
                component: TopicComponent
            }
        ]
    },
    {
        path: 'home',
        component: HomepageComponent,
    },
    {
        path: 'cities/1',
        component: SanfranciscoPageComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }