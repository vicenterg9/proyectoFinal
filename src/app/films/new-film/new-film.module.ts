import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewFilmRoutingModule } from './new-film-routing.module';
import { NewFilmPage } from './new-film.page';
import { NewFilmForm } from './new-film.form';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NewFilmPage,
    NewFilmForm
  ],
  imports: [
    CommonModule,
    NewFilmRoutingModule,SharedModule
  ]
})
export class NewFilmModule { }
