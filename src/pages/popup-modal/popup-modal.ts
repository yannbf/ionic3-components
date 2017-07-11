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
    documents:any = [{
          name: 'Ionic.sketch',
      }, {
          name: 'Envudu.sketch'
      }, {
          name: 'Fazescardgame.sketch'
      }, {
          name: 'Lucidchart.sketch'
      }];

    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) { }

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

    presentActionSheet(document) {
        let actionSheet = this.actionSheetCtrl.create({
          title: document.name,
          buttons: [
            {
              text: 'Move',
              handler: () => {
                this.moveDocumentModal();
                console.log('Move clicked');
              }
            },{
              text: 'Rename',
              handler: () => {
                let navTransition = actionSheet.dismiss();
                navTransition.then(() => {
                    // wait until action sheet dismisses
                    // https://ionicframework.com/docs/api/components/action-sheet/ActionSheetController/#advanced
                    this.renameDocument(document);
                    console.log('Rename clicked');
                });
                return false;
              }
            },{
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        actionSheet.present();
    }

    moveDocumentModal(){
        let myModal = this.modalCtrl.create('ModalNavPage', {page: 'MoveDocumentPage'});
        myModal.onDidDismiss(data => {
            if(data){
                console.log('move to folder', data);
            }
       });
       myModal.present();
    }

    renameDocument(document){
        let prompt = this.alertCtrl.create({
          title: 'Rename Document',
          inputs: [
            {
              name: 'title',
              placeholder: 'Title',
              value: document.name
            },
          ],
          buttons: [
            {
              text: 'Cancel',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Save',
              handler: data => {
                  document.name = data.title;
                console.log('Saved clicked');
              }
            }
          ]
        });
        prompt.present();
    }
}
