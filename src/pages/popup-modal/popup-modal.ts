import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-popup-modal',
    templateUrl: 'popup-modal.html'
})
export class PopupModalsPage {
    rootPage: any;

    constructor(public navCtrl: NavController, public modalCtrl: ModalController) { }

    openHintModal() {
        let myModal = this.modalCtrl.create('HintModalPage', null, { cssClass: 'inset-modal'});
        myModal.present();
    }

    openWalkthroughModal() {
        let myModal = this.modalCtrl.create('WalkthroughModalPage', null, { cssClass: 'inset-modal'});
        myModal.present();
    }

    openSignupModal() {
        let myModal = this.modalCtrl.create('SignupModalPage', null, { cssClass: 'inset-modal'});
        myModal.present();
    }
}
