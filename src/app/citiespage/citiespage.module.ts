import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesNavComponent } from './cities-nav/cities-nav.component';
import { SanfranciscoComponent } from './sanfrancisco/sanfrancisco.component';



@NgModule({
  declarations: [CitiesNavComponent, SanfranciscoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CitiesNavComponent,
    SanfranciscoComponent
  ]
})
export class CitiespageModule { }
