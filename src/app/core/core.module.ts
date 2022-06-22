import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'primeng/api';
import {TieredMenuModule} from 'primeng/tieredmenu';
<<<<<<< HEAD

=======
>>>>>>> dd54a2e6caf9f931636712229283ba42f9d03852

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
<<<<<<< HEAD
    CommonModule,RouterModule,TieredMenuModule
=======
    CommonModule, RouterModule,TieredMenuModule
>>>>>>> dd54a2e6caf9f931636712229283ba42f9d03852
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
