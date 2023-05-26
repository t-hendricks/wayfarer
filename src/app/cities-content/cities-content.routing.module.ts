import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesContentComponent } from './cities-content.component';
import { PostComponent } from '../post/post.component';

const cityRoutes: Routes = [
    {
        path: 'cities/:id',
        component: CitiesContentComponent,
        children: [
            {
                path: 'posts',
                component: PostComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(cityRoutes)],
    exports: [RouterModule]
})

export class CitiesContentRoutingModule { }
