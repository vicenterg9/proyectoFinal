import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-film-view-details',
  templateUrl: './film.view.html',
  styleUrls: ['./film.view.css'],
})

export class FilmView implements OnInit {

mostrarFormulario!:boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.mostrarFormulario = false;

  }

  ngOnInit(): void {
  }
  tocadoClick(){
    if (this.mostrarFormulario){
      this.mostrarFormulario = false;
    }else{
      this.mostrarFormulario = true;

    }
  }
}
