import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
<<<<<<< HEAD
=======


>>>>>>> dd54a2e6caf9f931636712229283ba42f9d03852

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  items!: MenuItem[];
  constructor() {

    this.items = [
      {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          url: 'http://www.google.com'
      },
      {
          label: 'Peliculas',
          icon: 'pi pi-fw pi-video',
          items: [
              {label: 'Nueva Pelicula', icon: 'pi pi-fw pi-plus'},
              {label: 'Listado', icon: 'pi pi-fw pi-list'}
          ]
      }
  ];

   }


  ngOnInit() {
  }

}
