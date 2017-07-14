import { PopupModalsPage } from './popup-modal';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PopupModalsPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupModalsPage),
  ],
  exports: [
    PopupModalsPage
  ]
})

export class PopupModalPageModule { }
