import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopupFabModalPage } from './popup-fab-modal';

@NgModule({
  declarations: [
    PopupFabModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupFabModalPage),
  ],
  exports: [
    PopupFabModalPage
  ]
})
export class PopupFabModalPageModule {}
