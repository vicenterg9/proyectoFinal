import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-films-list',
  templateUrl: './films.list.html',
  styleUrls: ['./films.list.css']
})
export class FilmsList implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
