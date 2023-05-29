import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CitiesContentComponent } from './cities-content/cities-content.component';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './nav-bar/search/search.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: LandingpageComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'cities/:id',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: CitiesContentComponent
            },
            {
                path: ':postId',
                component: PostComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }]
})

export class AppRoutingModule { }