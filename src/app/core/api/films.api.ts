import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudApi } from './crud.api';
import { Film } from './film.interface';


@Injectable({
  providedIn: 'root',
})
export class FilmsApi extends CrudApi<Film> {
  constructor(http: HttpClient) {
    super(http, 'films');
  }
}
