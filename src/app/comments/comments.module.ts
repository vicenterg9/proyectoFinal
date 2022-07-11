import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsPage } from './comments.page';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CommentsPage,
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,SharedModule,
    ButtonModule
  ],
  exports:[CommentsPage]
})
export class CommentsModule { }
