import { ToastService } from '../../providers/util/toast.service';
import { Component } from '@angular/core';
import {
    ActionSheetController,
    AlertController,
    IonicPage,
    ModalController,
    NavController,
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-with-navigation',
  templateUrl: 'modal-with-navigation.html',
})
export class ModalWithNavigationPage {

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastService) {
  }

  documents: any = [{
    name: 'Ionic.sketch',
  }, {
    name: 'Envudu.sketch'
  }, {
    name: 'Fazescardgame.sketch'
  }, {
    name: 'Lucidchart.sketch'
  }];

  presentActionSheet(document) {
    const actionSheet = this.actionSheetCtrl.create({
      title: document.name,
      buttons: [
        {
          text: 'Move',
          handler: () => {
            this.moveDocumentModal(document);
            console.log('Move clicked');
          }
        }, {
          text: 'Rename',
          handler: () => {
            const navTransition = actionSheet.dismiss();
            navTransition.then(() => {
              // wait until action sheet dismisses
              // https://ionicframework.com/docs/api/components/action-sheet/ActionSheetController/#advanced
              this.renameDocument(document);
              console.log('Rename clicked');
            });
            return false;
          }
        }, {
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

  moveDocumentModal(document) {
    const myModal = this.modalCtrl.create('ModalNavPage', { page: 'MoveDocumentPage' });
    myModal.onDidDismiss(data => {
      if (data) {
        this.toastCtrl.create('"' + document.name + '" moved to folder "' + data.name + '"');
      }
    });
    myModal.present();
  }

  renameDocument(document) {
    const prompt = this.alertCtrl.create({
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
