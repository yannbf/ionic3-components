import { HintModalPage } from './hint-modal/hint-modal';
import { SignupModalPage } from './signup-modal/signup-modal';
import { WalkthroughModalPage } from './walkthrough-modal/walkthrough-modal';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-small-modal',
  templateUrl: 'small-modal.html'
})
export class SmallModalsPage {
  myParam = 'asdasdsa';

  constructor(public modalCtrl: ModalController) { }

  openHintModal() {
    let myModal = this.modalCtrl.create(HintModalPage);
    myModal.present();
  }
  openSignupModal() {
    let myModal = this.modalCtrl.create(SignupModalPage);
    myModal.present();
  }
  openWalkthroughModal() {
    let myModal = this.modalCtrl.create(WalkthroughModalPage);
    myModal.present();
  }
}
