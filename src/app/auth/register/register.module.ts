import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { RegisterForm } from './register.form';
import { FormsModule } from "@angular/forms";

import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import { SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [
    RegisterPage,
    RegisterForm
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,FormsModule,PasswordModule,DividerModule,SharedModule,CardModule, ButtonModule,ConfirmDialogModule,MessagesModule
  ]
})
export class RegisterModule { }
