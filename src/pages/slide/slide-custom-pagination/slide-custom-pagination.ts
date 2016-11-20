import { Component } from '@angular/core';
import { AlertController, NavController, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-slide-custom-pagination',
  templateUrl: 'slide-custom-pagination.html'
})
export class SlideCustomPaginationPage {
  @ViewChild('slider') slider: Slides;

  options: any;
  showSlide = true;

  customPaginationNumbers = {
    pager: true,
    autoplay: 2000,
    paginationClickable: true,
    paginationBulletRender: (index, className) => {
      return '<span class="custom-pagination ' + className + '">' + (index + 1) + '</span>';
    },
    onInit: function (swiper) {
      this.slider = swiper;
      // Now you can do whatever you want with the swiper
    },
  };

  customPaginationNumbers2 = {
    pager: true,
    autoplay: 2000,
    paginationClickable: true,
    paginationBulletRender: (index, className) => {
      return '<span class="custom-pagination-2 ' + className + '">' + (index + 1) + '</span>';
    }
  };

  customPaginationIcons = {
    pager: true,
    autoplay: 2000,
    paginationClickable: true,
    paginationBulletRender: (index, className) => {
      return '<span class="custom-pagination-3 ' + 'bullet-icon-' + (index + 1) + ' ' + className + '"></span></span>';
    }
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
    this.options = this.customPaginationNumbers;
  }

  pagination = 'pagination-numbers';

  changeSlideStyle() {
    this.showSlide = false;
    switch (this.pagination) {
      case 'pagination-numbers':
        this.options = this.customPaginationNumbers;
        break;
      case 'pagination-numbers-2':
        this.options = this.customPaginationNumbers2;
        break;
      case 'pagination-icons':
        this.options = this.customPaginationIcons;
        break;
    }

    // Hack just to make the styles change. Without it, changing options dinamically won't work.
    // NOTE: You DON'T need to do this if you are using only one type of slider.
    setTimeout(() => this.showSlide = true, 10);
  }
}
