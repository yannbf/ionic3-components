import { CardMapPage } from './card-map';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CardMapPage,
  ],
  imports: [
    IonicPageModule.forChild(CardMapPage),
  ],
  exports: [
    CardMapPage
  ]
})

export class CardMapPageModule { }
