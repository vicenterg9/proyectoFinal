import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoFinal';
 homePage!: boolean;

  constructor(){

  }

  tocadoClick(){
    if (this.homePage){
      this.homePage = false;
    }else{
      this.homePage = true;

    }
  }
}
