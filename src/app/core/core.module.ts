import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'primeng/api';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { MenuComponent } from './menu/menu.component';
import { MenubarModule } from 'primeng/menubar';
import {  ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,

  ],
  imports: [
    CommonModule,RouterModule,TieredMenuModule,MenubarModule, ButtonModule,InputTextModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ]
})
export class CoreModule { }
