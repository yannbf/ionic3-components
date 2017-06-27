import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SliderWithArrowsPage } from './slider-with-arrows';

@NgModule({
  declarations: [
    SliderWithArrowsPage,
  ],
  imports: [
    IonicPageModule.forChild(SliderWithArrowsPage),
  ],
  exports: [
    SliderWithArrowsPage
  ]
})
export class SliderWithArrowsPageModule {}
