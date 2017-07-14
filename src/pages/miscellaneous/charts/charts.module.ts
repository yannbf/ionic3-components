import { ChartsPage } from './charts';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ChartsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChartsPage),
  ],
  exports: [
    ChartsPage
  ]
})

export class ChartsPageModule { }
