import { CardSocialPage } from './card-social';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CardSocialPage,
  ],
  imports: [
    IonicPageModule.forChild(CardSocialPage),
  ],
  exports: [
    CardSocialPage
  ]
})

export class CardSocialPageModule { }
