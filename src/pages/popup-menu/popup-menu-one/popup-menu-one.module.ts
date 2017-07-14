import { PopupMenuOnePage } from './popup-menu-one';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PopupMenuOnePage,
  ],
  imports: [
    IonicPageModule.forChild(PopupMenuOnePage),
  ],
  exports: [
    PopupMenuOnePage
  ]
})

export class PopupMenuOnePageModule { }
