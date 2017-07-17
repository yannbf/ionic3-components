import { ConcertCardPage } from './concert-card';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ConcertCardPage,
  ],
  imports: [
    IonicPageModule.forChild(ConcertCardPage),
  ],
  exports: [
    ConcertCardPage
  ]
})

export class ConcertCardPageModule { }
