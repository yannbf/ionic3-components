import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-params-modal',
  templateUrl: 'params-modal.html'
})
export class ParamsModalPage {
  myParam: string;

  constructor(
    public viewCtrl: ViewController,
    params: NavParams
  ) {
    this.myParam = params.get('myParam');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
