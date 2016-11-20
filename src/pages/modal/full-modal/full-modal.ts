import { BasicModalPage } from './basic-modal/basic-modal';
import { ParamsModalPage } from './params-modal/params-modal';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
    selector: 'page-full-modal',
    templateUrl: 'full-modal.html'
})
export class FullModalsPage {
    myParam = 'asdasdsa';

    constructor(public modalCtrl: ModalController) { }

    openBasicModal() {
        let myModal = this.modalCtrl.create(BasicModalPage);
        myModal.present();
    }
    openModalWithParams() {
        let myModal = this.modalCtrl.create(ParamsModalPage, { 'myParam': this.myParam });
        myModal.present();
    }
}
