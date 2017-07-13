import { Component } from '@angular/core';
import { ViewController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-walkthrough-modal',
  templateUrl: 'walkthrough-modal.html'
})
export class WalkthroughModalPage {

  slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: 'assets/img/slides/square.png',
      songs: 2,
    },
    {
      title: 'Really nice game',
      imageUrl: 'assets/img/slides/square-2.jpg',
      songs: 4,
    },
    {
      title: 'For the Weekend',
      imageUrl: 'assets/img/slides/square-3.jpg',
      songs: 4,
    },
  ];

  constructor(public viewCtrl: ViewController) { }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
