import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { GalleriaModule } from "primeng/galleria"


@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,SharedModule, GalleriaModule
  ],
  exports:[HomePage]
})
export class HomeModule { }
