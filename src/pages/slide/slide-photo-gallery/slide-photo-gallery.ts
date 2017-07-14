import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slide-photo-gallery',
  templateUrl: 'slide-photo-gallery.html'
})
export class SlidePhotoGalleryPage {

  // ngOnInit() {
  //   let el1 = document.getElementById('gallery-top');
  //   let el2 = document.getElementById('gallery-thumbs');
  //   console.log(el1, el2);
  //   let galleryTop = null;
  //   let galleryThumbs = null;

  //   galleryTop = new Swiper(el1, {
  //     nextButton: '.swiper-button-next',
  //     prevButton: '.swiper-button-prev',
  //     spaceBetween: 10,
  //     control: galleryTop
  //   });
  //   galleryThumbs = new Swiper(el2, {
  //     spaceBetween: 10,
  //     centeredSlides: true,
  //     slidesPerView: 'auto',
  //     touchRatio: 0.2,
  //     slideToClickedSlide: true,
  //     control: galleryThumbs
  //   });
  // }

  slides = [
    {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/1',
    }, {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/2',
    }, {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/3',
    }, {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/4',
    }, {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/5',
    }, {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/6',
    }, {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/7',
    }, {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/8',
    }, {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/9',
    }, {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/10',
    },
  ];

  constructor(public navCtrl: NavController) {

  }
}
