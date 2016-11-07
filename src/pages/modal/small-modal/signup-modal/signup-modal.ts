import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-signup-modal',
  templateUrl: 'signup-modal.html'
})
export class SignupModalPage {
  slideOptions = {
    pager: true
  };

  slides = [{
    id: 1,
    imageUrl: "assets/img/slides/square.png",
  },
  {
    id: 2,
    imageUrl: "assets/img/slides/square-2.jpg",
  },
  {
    id: 3,
    imageUrl: "assets/img/slides/square-3.jpg",
  },]

  constructor(public viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
