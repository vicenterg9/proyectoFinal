import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsFormsModule } from '../components-forms/components-forms.module';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TieredMenuModule]
})
export class SharedModule { }
