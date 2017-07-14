import { CardBadgePage } from './card-badge';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CardBadgePage,
  ],
  imports: [
    IonicPageModule.forChild(CardBadgePage),
  ],
  exports: [
    CardBadgePage
  ]
})

export class CardBadgePageModule { }
