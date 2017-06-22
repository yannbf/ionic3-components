import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopupFabPage } from './popup-fab';

@NgModule({
  declarations: [
    PopupFabPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupFabPage),
  ],
  exports: [
    PopupFabPage
  ]
})
export class PopupFabPageModule {}
