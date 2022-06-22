import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';



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
          label: 'HOME',
          icon: 'pi pi-fw pi-home',
          url: 'http://www.google.com'
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];

   }


  ngOnInit() {

<<<<<<< HEAD
=======
  ngOnInit(): void {
    // this.primengConfig.ripple = true;
>>>>>>> 2ec6409dff1479062b83304fd252a2e6d85f29f4
  }

}
