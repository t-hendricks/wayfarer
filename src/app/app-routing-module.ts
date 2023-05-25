import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeroComponent } from './hero/hero.component';
import { TopicComponent } from './topic/topic.component';
import { SanfranciscoPageComponent } from './sanfrancisco-page/sanfrancisco-page.component';
import { CitiespageComponent } from './citiespage/citiespage.component';
import { SanfranciscoContentComponent } from './sanfrancisco-page/sanfrancisco-content/sanfrancisco-content.component';
import { LondonContentComponent } from './london-content/london-content.component';
import { GibraltarContentComponent } from './gibraltar-content/gibraltar-content.component';
import { CitiesNavComponent } from './cities-nav/cities-nav.component';

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
        component: CitiesNavComponent,
    },
    {
        path: 'cities/1',
        component: SanfranciscoPageComponent,
    },
    {
        path: 'cities/2',
        component: LondonContentComponent,
    },
    {
        path: 'cities/3',
        component: GibraltarContentComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }