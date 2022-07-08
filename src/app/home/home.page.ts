import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photoservice';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

  images!: any[];

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getImages().then(images =>{
      this.images = images
  });
  }


}
