import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-basic-modal',
  templateUrl: 'basic-modal.html'
})
export class BasicModalPage {
  slideOptions = {
    pager: true
  };

  constructor(public viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
