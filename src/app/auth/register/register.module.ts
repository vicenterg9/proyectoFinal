import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { RegisterForm } from './register.form';
import { FormsModule } from "@angular/forms";

import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [
    RegisterPage,
    RegisterForm
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,FormsModule,PasswordModule,DividerModule,SharedModule
  ]
})
export class RegisterModule { }
