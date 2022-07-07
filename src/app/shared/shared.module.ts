import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';
import { FilmsList } from './components/films/films.list';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload'; // no necesitaré
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import {RatingModule} from 'primeng/rating';
import { ProductService } from './components/films/productservice';

@NgModule({
  declarations: [
    FilmsList
  ],
  imports: [
    CommonModule, RouterModule,
    ConfirmDialogModule,
    ToastModule,


    ToolbarModule,
    ButtonModule,
    FileUploadModule,
    TableModule,
    InputTextModule,
    HttpClientModule,
    RatingModule,


  ],
  exports: [

    FilmsList,
    RouterModule
  ],
  providers: [ProductService]

})
export class SharedModule { }
