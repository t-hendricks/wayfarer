import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CitiesContentComponent } from './cities-content/cities-content.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
    {
        path: '',
        component: LandingpageComponent
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
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }