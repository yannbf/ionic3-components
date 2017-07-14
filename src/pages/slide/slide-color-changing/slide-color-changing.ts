import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slide-color-changing',
  templateUrl: 'slide-color-changing.html'
})
export class SlideColorChangingPage {
  @ViewChild('slider') slider: Slides;

  slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: 'assets/img/lists/wishlist-1.jpg',
      songs: 2,
      private: false
    },
    {
      title: 'For the Weekend',
      imageUrl: 'assets/img/lists/wishlist-2.jpg',
      songs: 4,
      private: false
    },
    {
      title: 'Family Time',
      imageUrl: 'assets/img/lists/wishlist-3.jpg',
      songs: 5,
      private: true
    },
    {
      title: 'My Trip',
      imageUrl: 'assets/img/lists/wishlist-4.jpg',
      songs: 12,
      private: true
    }
  ];

  color: any;
  colors = ['#e43737', '#e0e437', '#37e446', '#375be4', '#972cb1'];

  onSlideChanged() {
    const currentIndex = this.slider.getActiveIndex();
    this.color = this.colors[currentIndex];
    console.log('Slide changed! Current index is', currentIndex);
  }

  constructor(public navCtrl: NavController) {
    this.color = this.colors[0];
  }
}
