import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slider-list',
  templateUrl: 'slider-list.html'
})
export class SliderListPage {

  items = [
    {
      name: 'one',
      slides: [{
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
      }]
    },
    {
      name: 'one',
      slides: [
        {
          title: 'My Trip',
          imageUrl: 'assets/img/lists/wishlist-4.jpg',
          songs: 12,
          private: true
        },
        {
          title: 'Dream\'s Adventure',
          imageUrl: 'assets/img/lists/wishlist-1.jpg',
          songs: 2,
          private: false
        },
        {
          title: 'Family Time',
          imageUrl: 'assets/img/lists/wishlist-3.jpg',
          songs: 5,
          private: true
        },]
    },
    {
      name: 'one',
      slides: [
        {
          title: 'For the Weekend',
          imageUrl: 'assets/img/lists/wishlist-2.jpg',
          songs: 4,
          private: false
        },
        {
          title: 'Dream\'s Adventure',
          imageUrl: 'assets/img/lists/wishlist-1.jpg',
          songs: 2,
          private: false
        },
        {
          title: 'Dream\'s Adventure',
          imageUrl: 'assets/img/lists/wishlist-1.jpg',
          songs: 2,
          private: false
        },
        {
          title: 'Family Time',
          imageUrl: 'assets/img/lists/wishlist-3.jpg',
          songs: 5,
          private: true
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
        }]
    }
  ];

  constructor(public navCtrl: NavController) { }
}
