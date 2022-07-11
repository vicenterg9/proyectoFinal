import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCommentRoutingModule } from './new-comment-routing.module';
import { NewCommentPage } from './new-comment.page';
import { NewCommentForm } from './new-comment.form';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';



@NgModule({
  declarations: [
    NewCommentPage,
    NewCommentForm
  ],
  imports: [
    CommonModule,
    NewCommentRoutingModule,FormsModule,DividerModule,CardModule, ButtonModule,InputTextareaModule,DropdownModule
  ],
  exports:[NewCommentForm]
})
export class NewCommentModule { }
