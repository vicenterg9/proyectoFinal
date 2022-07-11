import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class FilmsApi extends Film {
  constructor(http: HttpClient,) {
    super(http, 'agencies');
  }
}
