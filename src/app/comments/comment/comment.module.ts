import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from './comment.component';
import { CommentPage } from './comment.page';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    CommentComponent,
    CommentPage
  ],
  imports: [
    CommonModule,
    CommentRoutingModule, ButtonModule
  ]
})
export class CommentModule { }
