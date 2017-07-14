import { WalkthroughModalPage } from './walkthrough-modal';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    WalkthroughModalPage,
  ],
  imports: [
    IonicPageModule.forChild(WalkthroughModalPage),
  ],
  exports: [
    WalkthroughModalPage
  ]
})

export class WalkthroughModalPageModule { }
