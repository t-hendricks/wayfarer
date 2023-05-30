import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app.routing.module';
import { FormsModule } from '@angular/forms';

import { NavBarComponent } from './nav-bar.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    NavBarComponent,
    SearchComponent
  ]
})
export class NavBarModule { }
