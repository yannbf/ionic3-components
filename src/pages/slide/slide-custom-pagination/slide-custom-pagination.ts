import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slide-custom-pagination',
  templateUrl: 'slide-custom-pagination.html'
})
export class SlideCustomPaginationPage {
  @ViewChild('sliderOne') sliderOne: Slides;
  @ViewChild('sliderTwo') sliderTwo: Slides;
  @ViewChild('sliderThree') sliderThree: Slides;

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

  constructor(public navCtrl: NavController) { }

  ngAfterViewInit() {
    this.sliderOne.paginationBulletRender = (index, className) => {
      return `<span class="custom-pagination ${className}>${index + 1}</span>`;
    };

    this.sliderTwo.paginationBulletRender = (index, className) => {
      return `<span class="custom-pagination-2 ${className}>${index + 1}</span>`;
    };

    this.sliderThree.paginationBulletRender = (index, className) => {
      return `<span class="custom-pagination-3 bullet-icon-${index + 1} ${className}></span>`;
    };
  }
}
