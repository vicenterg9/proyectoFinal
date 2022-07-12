import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  items!: MenuItem[];
  constructor(private router : Router) {

    this.items = [
      {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          routerLink: "/",
          // command :(click)=>{this.router.navigate(['/'])}
      },
      {
          label: 'Peliculas',
          icon: 'pi pi-fw pi-video',
          items: [
              {label: 'Nueva Pelicula', icon: 'pi pi-fw pi-plus', routerLink:'/films/new'},
              {label: 'Listado', icon: 'pi pi-fw pi-list', routerLink:'/films'},
          ]
      },
      {
        label: 'Registro',
        icon: 'pi pi-fw pi-user',
        routerLink: "auth/register"
      },
      {
        label: 'Login',
        icon: 'pi pi-fw pi-sign-in',
        routerLink: "/auth/login"
    },
    ];
  }
  ngOnInit() {
  }

}
