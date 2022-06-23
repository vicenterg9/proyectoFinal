import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { LoginForm } from './login.form';
import { SharedModule } from 'primeng/api';
import {CheckboxModule} from 'primeng/checkbox';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ImageModule} from 'primeng/image';
import {InputTextModule} from 'primeng/inputtext';



@NgModule({
  declarations: [
    LoginPage,
    LoginForm,

  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    CheckboxModule,
    CardModule,
    ButtonModule,
    ImageModule,
    InputTextModule
  ]
})
export class LoginModule { }
