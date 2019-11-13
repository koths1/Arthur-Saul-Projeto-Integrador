import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.css']
})
export class NgbdCarouselBasic {
  /*img1 = require('./../../assets/Images/Carousel/img1.jpg')
  img2 = require('./../../assets/Images/Carousel/img2.jpg')
  img3 = require('./../../assets/Images/Carousel/img3.jpg')
  images = [1,2,3].map(()=> [this.img1,this.img2,this.img3]) ;*/ 
    images = [1,2,3].map(()=> `https://picsum.photos/900/500?random&t=${Math.random()}`);
    //
}
