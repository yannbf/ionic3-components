import { SlideColorChangingPage } from './slide-color-changing';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SlideColorChangingPage,
  ],
  imports: [
    IonicPageModule.forChild(SlideColorChangingPage),
  ],
  exports: [
    SlideColorChangingPage
  ]
})

export class SlideColorChangingPageModule { }
