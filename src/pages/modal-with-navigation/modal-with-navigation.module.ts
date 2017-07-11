import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalWithNavigationPage } from './modal-with-navigation';

@NgModule({
  declarations: [
    ModalWithNavigationPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalWithNavigationPage),
  ],
  exports: [
    ModalWithNavigationPage
  ]
})
export class ModalWithNavigationPageModule {}
