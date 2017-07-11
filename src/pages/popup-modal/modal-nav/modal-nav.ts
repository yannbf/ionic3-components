import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-nav',
  templateUrl: 'modal-nav.html',
})
export class ModalNavPage {
	modalPage: any = this.navParams.get('page');
  
  modalParams: any = {
  }

  constructor(public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNavPage');
  }
  
  dismissModal(data){
    this.viewCtrl.dismiss(data);
  }

}
