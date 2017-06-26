import { Component, ViewChild } from '@angular/core';
import { AlertController, NavController, Slides, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slide-nested',
  templateUrl: 'slide-nested.html'
})
export class SlideNestedPage {
  @ViewChild('slider') slider: Slides;

  horizontalSlideOptions = {
    pager: true,
    autoplay: 2000,
  };

  verticalSlideOptions = {
    pager: true,
    autoplay: 2000,
    direction: 'vertical',
    spaceBetween: 50
  };

  slides = [{
    title: "Dream's Adventure",
    imageUrl: "assets/img/lists/wishlist-1.jpg",
  },
  {
    title: "For the Weekend",
    imageUrl: "assets/img/lists/wishlist-2.jpg",
  },
  {
    title: "Family Time",
    imageUrl: "assets/img/lists/wishlist-3.jpg",
  },
  {
    title: "My Trip",
    imageUrl: "assets/img/lists/wishlist-4.jpg",
  }
  ]

  onSlideChanged() {
    let currentIndex = this.slider.getActiveIndex();
    console.log("Slide changed! Current index is", currentIndex);
  }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }
}
