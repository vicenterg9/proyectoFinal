import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmRoutingModule } from './film-routing.module';
import { FilmView } from "./film.view";


@NgModule({
  declarations: [
    FilmView
  ],
  imports: [
    CommonModule,
    FilmRoutingModule
  ]
})
export class FilmModule { }
