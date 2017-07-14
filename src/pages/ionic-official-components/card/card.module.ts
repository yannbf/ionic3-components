import { CardsListPage } from './card';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CardsListPage,
  ],
  imports: [
    IonicPageModule.forChild(CardsListPage),
  ],
  exports: [
    CardsListPage
  ]
})

export class CardListPageModule { }
