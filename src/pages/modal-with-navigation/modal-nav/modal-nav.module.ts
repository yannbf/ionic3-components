import { ModalNavPage } from './modal-nav';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ModalNavPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalNavPage),
  ],
  exports: [
    ModalNavPage
  ]
})
export class ModalNavPageModule {}
