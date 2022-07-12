import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewFilmRoutingModule } from './new-film-routing.module';
import { NewFilmPage } from './new-film.page';
import { NewFilmForm } from './new-film.form';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [
    NewFilmPage,
    NewFilmForm
  ],
  imports: [
    CommonModule,
    NewFilmRoutingModule,SharedModule,
    CardModule, ButtonModule,ConfirmDialogModule,MessagesModule
  ]
})
export class NewFilmModule { }
