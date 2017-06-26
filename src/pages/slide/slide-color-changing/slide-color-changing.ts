import { Component, ViewChild } from '@angular/core';
import { AlertController, NavController, Slides, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slide-color-changing',
  templateUrl: 'slide-color-changing.html'
})
export class SlideColorChangingPage {
  @ViewChild('slider') slider: Slides;

  slideOptions = {
    pager: true,
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

  decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
      hex = "0" + hex;
    }

    return hex;
  }

  color: any;
  onSlideMove(event) {
    console.log(event);
    let maxValue = event.virtualSize - event.width;
    let normalizedValue = this.normalize(event.translate * -1, maxValue);
    let hexCode = this.decimalToHex(normalizedValue, 2);
    // let slideCount = event.slidesGrid.length;
    let inverseHexCode = this.decimalToHex(255 - normalizedValue, 2);
    if (event.activeIndex == 0) {
      this.color = '#' + inverseHexCode + hexCode + hexCode;
    } else if (event.activeIndex == 1) {
      this.color = '#' + hexCode + inverseHexCode + hexCode;
    } if (event.activeIndex == 2) {
      this.color = '#' + hexCode + hexCode + inverseHexCode;
    } else {
      this.color = '#' + hexCode + hexCode + hexCode;
    }
  }

  normalize(value, maxValue) {
    value = value < 0 ? 0 : value;
    let proportion = value / maxValue;
    console.log(value, proportion);
    proportion = proportion > 1 ? 1 : proportion;
    return Math.trunc(proportion * 255);
  }
}
