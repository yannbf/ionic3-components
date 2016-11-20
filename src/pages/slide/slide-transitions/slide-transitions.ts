import { Component } from '@angular/core';
import { AlertController, NavController, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-slide-transitions',
  templateUrl: 'slide-transitions.html'
})
export class SlideTransitionsPage {
  @ViewChild('slider') slider: Slides;

  options: any;
  showArrows = false;
  showSlide = true;

  slideOptions = {
    pager: true,
    autoplay: 2000,
    paginationClickable: true,
    autoplayDisableOnInteraction: false
  };

  cubeOptions = {
    effect: 'cube',
    cube: {
      // For better perfomance, turn shadows off.
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    pager: true,
    speed: 600,
    autoplay: 2000,
    paginationClickable: true,
  }

  coverflowOptions = {
    coverflow: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      // For better perfomance, turn shadows off.
      slideShadows: true
    },
    pager: true,
    autoplay: 2000,
    speed: 600,
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    paginationClickable: true,
  }

  fadeOptions = {
    // pager: true,
    effect: 'fade',
    autoplay: 2000,
    speed: 600,
    spaceBetween: 30,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  }

  slides = [{
    title: "Dream's Adventure",
    imageUrl: "assets/img/lists/wishlist-1.jpg",
    songs: 2,
    private: false
  },
  {
    title: "For the Weekend",
    imageUrl: "assets/img/lists/wishlist-2.jpg",
    songs: 4,
    private: false
  },
  {
    title: "Family Time",
    imageUrl: "assets/img/lists/wishlist-3.jpg",
    songs: 5,
    private: true
  },
  {
    title: "My Trip",
    imageUrl: "assets/img/lists/wishlist-4.jpg",
    songs: 12,
    private: true
  }
  ]

  onSlideChanged() {
    let currentIndex = this.slider.getActiveIndex();
    console.log("Slide changed! Current index is", currentIndex);
  }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.options = this.slideOptions;
  }

  transition = 'Slide';

  changeSlideStyle() {
    this.showArrows = this.showSlide = false;
    switch (this.transition) {
      case 'slide':
        this.options = this.slideOptions;
        break;
      case 'cube':
        this.options = this.cubeOptions;
        break;
      case 'coverflow':
        this.options = this.coverflowOptions;
        break;
      case 'fade':
        this.showArrows = true;
        this.options = this.fadeOptions;
        break;
    }

    // Hack just to make the styles change. Without it, changing options dinamically won't work.
    // NOTE: You DON'T need to do this if you are using only one type of slider.
    setTimeout(() => this.showSlide = true, 10);
  }
}
