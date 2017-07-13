import { PopupMenuListPage } from './popup-menu';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PopupMenuListPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupMenuListPage),
  ],
  exports: [
    PopupMenuListPage
  ]
})

export class PopupMenuListPageModule { }
