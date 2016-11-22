import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
@Component({
  selector: 'page-walkthrough-modal',
  templateUrl: 'walkthrough-modal.html'
})
export class WalkthroughModalPage {
  slideOptions = {
    pager: true,
  };

  slides = [{
    title: "Dream's Adventure",
    imageUrl: "assets/img/slides/square.png",
    songs: 2,
    private: false
  },
  {
    title: "Dream's Adventure",
    imageUrl: "assets/img/slides/square.png",
    songs: 2,
    private: false
  },
  {
    title: "For the Weekend",
    imageUrl: "assets/img/slides/square-2.jpg",
    songs: 4,
    private: false
  },
  {
    title: "For the Weekend",
    imageUrl: "assets/img/slides/square-3.jpg",
    songs: 4,
    private: false
  },]

  constructor(public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
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

    if (event.activeIndex == 0) {
      this.color = '#FF' + hexCode + hexCode;
    } else if (event.activeIndex == 1) {
      this.color = '#' + hexCode + 'FF' + hexCode;
    } if (event.activeIndex == 2) {
      this.color = '#' + hexCode + hexCode + 'FF';
    } else {
      this.color = '#' + hexCode + hexCode + hexCode;
    }

    console.log('cor ', this.color);
  }

  normalize(value, maxValue) {
    value = value < 0 ? 0 : value;
    let proportion = value / maxValue;
    console.log(value, proportion);
    proportion = proportion > 1 ? 1 : proportion;
    return Math.trunc(proportion * 255);
  }

  // private static blendColors(color1, color2, ratio) {
  //   let inverseRation = 1.0 - ratio;
  //   let r = (Color.red(color1) * ratio) + (Color.red(color2) * inverseRation);
  //   let g = (Color.green(color1) * ratio) + (Color.green(color2) * inverseRation);
  //   let b = (Color.blue(color1) * ratio) + (Color.blue(color2) * inverseRation);
  //   return Color.rgb((int) r, (int) g, (int) b);
  // }

  onItemMove(el, x, y, r) {
    var color = '';
    var abs = Math.abs(x);
    let min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    let hexCode = this.decimalToHex(min, 2);

    if (x < 0) {
      color = '#' + hexCode + 'FF' + hexCode;
    } else {
      color = '#FF' + hexCode + hexCode;
    }

    el.style.background = color;
    el.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }
}
