import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

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
