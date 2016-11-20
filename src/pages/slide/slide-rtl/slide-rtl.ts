import { Component } from '@angular/core';
import { AlertController, NavController, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-slide-rtl',
  templateUrl: 'slide-rtl.html'
})
export class SlideRightToLeftPage {
  @ViewChild('slider') slider: Slides;

  slideOptions = {
    pager: true,
    autoplay: 2000,
    paginationClickable: true,
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
  }
}
