import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

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

  signup() {

  }

  login() {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
