import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-popup-fab',
  templateUrl: 'popup-fab.html',
})
export class PopupFabPage {

  expanded: any;
  contracted: any;
  showIcon = true;
  preload  = true;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams
  ) { }

  expand() {
    this.expanded = true;
    this.contracted = !this.expanded;
    this.showIcon = false;
    setTimeout(() => {
      const modal = this.modalCtrl.create('PopupFabModalPage');
      modal.onDidDismiss(data => {
        this.expanded = false;
        this.contracted = !this.expanded;
        setTimeout(() => this.showIcon = true, 330);
      });
      modal.present();
    },         200);
  }
}
