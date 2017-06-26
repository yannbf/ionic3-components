import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slide-transitions',
  templateUrl: 'slide-transitions.html'
})
export class SlideTransitionsPage {
  @ViewChild('slider') slider: Slides;

  showArrows = false;
  showSlide = true;

  slideEffect = "cube";

  fadeOptions = {
    // pager: true,
    effect: 'fade',
    autoplay: 2000,
    speed: 600,
    spaceBetween: 30,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  }

  slides = [
    {
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

  constructor(public navCtrl: NavController ) { }

  changeSlideStyle() {
    // this.slideEffect = 'cube';
    this.slider.freeMode = true;
    // debugger;
    // Hack just to make the styles change. Without it, changing options dinamically won't work.
    // NOTE: You DON'T need to do this if you are using only one type of slider.
    // setTimeout(() => this.showSlide = true, 100);
  }
}
