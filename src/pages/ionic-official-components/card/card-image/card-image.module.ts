import { CardImagePage } from './card-image';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CardImagePage,
  ],
  imports: [
    IonicPageModule.forChild(CardImagePage),
  ],
  exports: [
    CardImagePage
  ]
})

export class CardImagePageModule { }
