import { HintModalPage } from './hint-modal';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    HintModalPage,
  ],
  imports: [
    IonicPageModule.forChild(HintModalPage),
  ],
  exports: [
    HintModalPage
  ]
})

export class HintModalPageModule { }
