import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slide-walkthrough',
  templateUrl: 'slide-walkthrough.html',
})
export class SlideWalkthroughPage {

  @ViewChild('slider') slider: Slides;
  slideIndex = 0;
  slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: 'assets/img/lists/wishlist-1.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'For the Weekend',
      imageUrl: 'assets/img/lists/wishlist-2.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'Family Time',
      imageUrl: 'assets/img/lists/wishlist-3.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'My Trip',
      imageUrl: 'assets/img/lists/wishlist-4.jpg',
      description: 'Take a look at our amazing options',
    }
  ];

  constructor(public navCtrl: NavController) { }

  onSlideChanged() {
    this.slideIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', this.slideIndex);
  }

  goToApp() {
    console.log('Go to App clicked');
  }

  skip() {
    console.log('Skip clicked');
  }
}
