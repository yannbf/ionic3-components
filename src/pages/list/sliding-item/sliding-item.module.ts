import { SlidingItemPage } from './sliding-item';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SlidingItemPage,
  ],
  imports: [
    IonicPageModule.forChild(SlidingItemPage),
  ],
  exports: [
    SlidingItemPage
  ]
})

export class SlidingItemPageModule { }
