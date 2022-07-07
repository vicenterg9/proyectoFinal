import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsPage } from './films.page';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FilmsPage
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    SharedModule
  ]
})
export class FilmsModule { }
