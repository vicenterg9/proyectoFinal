import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { ComponentsFormsModule } from '../components-forms/components-forms.module';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { ComponentesModule } from '../componentes/componentes.module';
>>>>>>> 2ec6409dff1479062b83304fd252a2e6d85f29f4


@NgModule({
  declarations: [],
  imports: [
<<<<<<< HEAD
    CommonModule
  ],
  exports: [
    TieredMenuModule]
=======
    CommonModule,ComponentesModule
  ],
  exports: [ComponentesModule]
>>>>>>> 2ec6409dff1479062b83304fd252a2e6d85f29f4
})
export class SharedModule { }
