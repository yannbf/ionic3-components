import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-popup-fab-modal',
  templateUrl: 'popup-fab-modal.html',
})
export class PopupFabModalPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) { }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
