import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { HintModalPage } from './hint-modal/hint-modal';
import { SignupModalPage } from './signup-modal/signup-modal';
import { WalkthroughModalPage } from './walkthrough-modal/walkthrough-modal';

@Component({
    selector: 'page-popup-modal',
    templateUrl: 'popup-modal.html'
})
export class PopupModalsPage {
    rootPage: any;
    items: Array<{ title: string, page: any }>;

    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

    }

    openHintModal() {
        let myModal = this.modalCtrl.create(HintModalPage);
        myModal.present();
    }

    openWalkthroughModal() {
        let myModal = this.modalCtrl.create(WalkthroughModalPage);
        myModal.present();
    }

    openSignupModal() {
        let myModal = this.modalCtrl.create(SignupModalPage);
        myModal.present();
    }
}
