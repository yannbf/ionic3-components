import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalNavPage } from '../modal-nav';

@IonicPage()
@Component({
  selector: 'page-move-document',
  templateUrl: 'move-document.html',
})
export class MoveDocumentPage {

	thisFolder: any = this.navParams.get('folder') || {
  	name: 'Documents'
  }

  folders:any = [{
  		name: 'My Folder 1',
  	}, {
  		name: 'My Folder 2'
  	}, {
  		name: 'My Folder 3'
  	}, {
  		name: 'My Folder 4'
  	}];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalNavPage: ModalNavPage) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoveDocumentPage');
  }

  goToFolder(folder){
  	this.navCtrl.push('MoveDocumentPage', { folder: folder });
  }

  moveHere(folder){
  	this.modalNavPage.dismissModal(folder);
  }
}
