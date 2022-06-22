import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { SharedModule } from 'primeng/api';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======


>>>>>>> 2ec6409dff1479062b83304fd252a2e6d85f29f4

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
<<<<<<< HEAD
    CommonModule, RouterModule,SharedModule,TieredMenuModule
=======
    CommonModule,RouterModule
>>>>>>> 2ec6409dff1479062b83304fd252a2e6d85f29f4
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
