import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slide-nested',
  templateUrl: 'slide-nested.html'
})
export class SlideNestedPage {
  @ViewChild('slider') slider: Slides;

  slides = [{
    title: 'Dream\'s Adventure',
    imageUrl: 'assets/img/lists/wishlist-1.jpg',
  },
  {
    title: 'For the Weekend',
    imageUrl: 'assets/img/lists/wishlist-2.jpg',
  },
  {
    title: 'Family Time',
    imageUrl: 'assets/img/lists/wishlist-3.jpg',
  },
  {
    title: 'My Trip',
    imageUrl: 'assets/img/lists/wishlist-4.jpg',
  }
  ];

  constructor(public navCtrl: NavController) { }
}
