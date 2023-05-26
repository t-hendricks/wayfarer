import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CitiesContentComponent } from './cities-content/cities-content.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
    {
        path: '',
        component: LandingpageComponent
    },
    {
        path: 'home',
        component: HomepageComponent,
    },
    {
        path: 'cities/:id',
        component: CitiesContentComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }