import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContextMenuModule} from 'primeng/contextmenu';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContextMenuModule,
  ],
  exports:[
    CommonModule,
    ContextMenuModule,
  ]
})
export class ComponentsFormsModule { }
