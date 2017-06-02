import { CameraProvider } from '../../../providers/util/camera.provider';
import { Component } from '@angular/core';
import { NavController, Platform, ActionSheetController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-get-image',
  templateUrl: 'get-image.html'
})
export class GetImagePage {

  placeholder = 'assets/img/avatar/girl-avatar.png';
  chosenPicture: any;

  constructor(public navCtrl: NavController, public actionsheetCtrl: ActionSheetController,
    public cameraProvider: CameraProvider, public platform: Platform, public loadingCtrl: LoadingController) {
  }

  changePicture() {
    let loading = this.loadingCtrl.create();

    let actionSheet = this.actionsheetCtrl.create({
      title: 'Upload picture',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            loading.present();
            return this.cameraProvider.getPictureFromCamera().then(picture => {
              if (picture) {
                this.chosenPicture = picture;
              }
              loading.dismiss();
            }, error => {
              alert(error);
            });
          }
        },
        {
          text: !this.platform.is('ios') ? 'Gallery' : 'Camera Roll',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            loading.present();
            return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
              if (picture) {
                this.chosenPicture = picture;
              }
              loading.dismiss();
            }, error => {
              alert(error);
            });
          }
        },
        {
          text: 'Cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'destructive',
          handler: () => {
            console.log('The user has cancelled the interaction.');
          }
        }
      ]
    });
    return actionSheet.present();
  }
}
