import { Component, ViewChild } from '@angular/core';
import { AlertController, NavController, Slides, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slide-multirow',
  templateUrl: 'slide-multirow.html'
})
export class SlideMultirowPage {
  @ViewChild('slider') slider: Slides;

  slideOptions = {
    pager: true,
    autoplay: 2000,
    // slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 10
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
  },
  {
    title: "For the Weekend",
    imageUrl: "assets/img/lists/wishlist-2.jpg",
    songs: 4,
    private: false
  },
  {
    title: "My Trip",
    imageUrl: "assets/img/lists/wishlist-4.jpg",
    songs: 12,
    private: true
  },
  {
    title: "Family Time",
    imageUrl: "assets/img/lists/wishlist-3.jpg",
    songs: 5,
    private: true
  },
  {
    title: "Dream's Adventure",
    imageUrl: "assets/img/lists/wishlist-1.jpg",
    songs: 2,
    private: false
  },
  ]

  onSlideChanged() {
    let currentIndex = this.slider.getActiveIndex();
    console.log("Slide changed! Current index is", currentIndex);
  }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    for (let i = 0; i < 20; i++) {
      // this.slides.push(this.slides[i % 4]);
    }
  }
}
