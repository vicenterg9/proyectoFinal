import { Component, OnInit } from '@angular/core';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css'],
  providers:[ConfirmationService]
})
export class RegisterForm  {

  value3! : string;


  constructor(private primengConfig :PrimeNGConfig, private confirmationService : ConfirmationService){ }
  onInit(){
    this.primengConfig.ripple = true;
  }


  confirm(){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
       // this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
      }
     });
  }
}
