import { SlideTransitionsPage } from './slide-transitions';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SlideTransitionsPage,
  ],
  imports: [
    IonicPageModule.forChild(SlideTransitionsPage),
  ],
  exports: [
    SlideTransitionsPage
  ]
})

export class SlideTransitionsPageModule { }
