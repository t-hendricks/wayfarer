import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { CitiesContentComponent } from './cities-content/cities-content.component';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './nav-bar/search/search.component';
import { WildcardComponent } from './wildcard/wildcard.component';

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
    },
    // The wildcard route matches any remaining routes to the Wildcard Component
    {
        path: '**',
        component: WildcardComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    
    // PathLocationStrategy is used as the routing strategy instead of HashLocationStrategy.
    // All path requests are redirected to the index.html file, allowing for a more intuitive UX due to a clearer URL.
    providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }]
})

export class AppRoutingModule { }