import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items!: MenuItem[];
    constructor(private router: ActivatedRoute) {
      this.items = [{
        label: 'All Films Online ',
        routerLink: '/'
      }

      ];

   }

  ngOnInit(): void {
  }

}
