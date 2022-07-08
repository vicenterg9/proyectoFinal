import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmRoutingModule } from './film-routing.module';
import { FilmView } from "./film.view";

import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    FilmView
  ],
  imports: [
    CommonModule,
    FilmRoutingModule,
    ChipModule,
    ButtonModule
  ]
})
export class FilmModule { }
