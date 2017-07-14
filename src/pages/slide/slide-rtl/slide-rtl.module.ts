import { SlideRightToLeftPage } from './slide-rtl';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SlideRightToLeftPage,
  ],
  imports: [
    IonicPageModule.forChild(SlideRightToLeftPage),
  ],
  exports: [
    SlideRightToLeftPage
  ]
})

export class SlideRightToLeftPageModule { }
