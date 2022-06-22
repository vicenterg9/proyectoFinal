import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'primeng/api';
import {TieredMenuModule} from 'primeng/tieredmenu';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule, RouterModule,TieredMenuModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
