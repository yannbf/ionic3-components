import { SlideNestedPage } from './slide-nested';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SlideNestedPage,
  ],
  imports: [
    IonicPageModule.forChild(SlideNestedPage),
  ],
  exports: [
    SlideNestedPage
  ]
})

export class SlideNestedPageModule { }
