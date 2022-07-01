import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';
import { FilmsList } from './components/films/films.list';



@NgModule({
  declarations: [
    FilmsList
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [

    FilmsList,
    RouterModule
  ]
})
export class SharedModule { }
