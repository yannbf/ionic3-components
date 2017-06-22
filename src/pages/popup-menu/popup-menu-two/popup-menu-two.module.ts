import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopupMenuTwoPage } from './popup-menu-two';

@NgModule({
  declarations: [
    PopupMenuTwoPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupMenuTwoPage),
  ],
  exports: [
    PopupMenuTwoPage
  ]
})
export class PopupMenuTwoPageModule {}
