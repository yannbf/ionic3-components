import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage } from 'ionic-angular';

@IonicPage()
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
        let myModal = this.modalCtrl.create('HintModalPage');
        myModal.present();
    }

    openWalkthroughModal() {
        let myModal = this.modalCtrl.create('WalkthroughModalPage');
        myModal.present();
    }

    openSignupModal() {
        let myModal = this.modalCtrl.create('SignupModalPage');
        myModal.present();
    }
}
