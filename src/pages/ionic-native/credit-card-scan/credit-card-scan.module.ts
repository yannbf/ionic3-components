import { CreditCardScanPage } from './credit-card-scan';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CreditCardScanPage,
  ],
  imports: [
    IonicPageModule.forChild(CreditCardScanPage),
  ],
  exports: [
    CreditCardScanPage
  ]
})

export class CreditCardScanPageModule { }
