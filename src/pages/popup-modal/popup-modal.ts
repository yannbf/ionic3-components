import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage } from 'ionic-angular';
import { ActionSheetController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-popup-modal',
    templateUrl: 'popup-modal.html'
})
export class PopupModalsPage {
    rootPage: any;

    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public alertCtrl: AlertController) { }

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
