import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from '../post/post.component';
import { CitiesContentComponent } from '../cities-content/cities-content.component';

const postRoutes: Routes = [
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
    imports: [RouterModule.forChild(postRoutes)],
    exports: [RouterModule]
})

export class PostRoutingModule { }
