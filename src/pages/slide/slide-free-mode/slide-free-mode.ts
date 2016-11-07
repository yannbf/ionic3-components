import { Swiper } from 'ionic-angular/components/slides/swiper-widget';
import { Component } from '@angular/core';
import { AlertController, NavController, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-slide-free-mode',
  templateUrl: 'slide-free-mode.html'
})
export class SlideFreeModePage {
  @ViewChild('slider') slider: Slides;

  slideOptions = {
    slidesPerView: 2,
    spaceBetween: 10,
    freeMode: true
  };

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
    for (let i = 0; i < 20; i++) {
      this.slides.push(this.slides[i % 4]);
    }
  }
}
