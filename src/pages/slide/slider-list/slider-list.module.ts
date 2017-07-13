import { SliderListPage } from './slider-list';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SliderListPage,
  ],
  imports: [
    IonicPageModule.forChild(SliderListPage),
  ],
  exports: [
    SliderListPage
  ]
})

export class SliderListPageModule { }
