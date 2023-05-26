import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CitiesContentComponent } from './cities-content/cities-content.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
    {
        path: '',
        component: LandingpageComponent
    },
    {
        path: 'home',
        component: HomepageComponent,
    },
    // https://stackoverflow.com/questions/42129460/hide-parent-view-in-angular-2
    {
        path: 'cities/:id',
        // component: CitiesContentComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: CitiesContentComponent
            },
            {
                path: 'posts',
                component: PostComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }