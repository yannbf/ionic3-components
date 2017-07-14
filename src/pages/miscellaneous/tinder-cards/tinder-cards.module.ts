import { SharedModule } from '../../../app/shared.module';
import { TinderCardsPage } from './tinder-cards';
import { SwingModule } from 'angular2-swing';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    TinderCardsPage,
  ],
  imports: [
    IonicPageModule.forChild(TinderCardsPage),
    SwingModule,
    SharedModule
  ],
  exports: [
    TinderCardsPage
  ]
})

export class TinderCardsPageModule { }
