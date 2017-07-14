import { CardBackgroundPage } from './card-background';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CardBackgroundPage,
  ],
  imports: [
    IonicPageModule.forChild(CardBackgroundPage),
  ],
  exports: [
    CardBackgroundPage
  ]
})

export class CardBackgroundPageModule { }
