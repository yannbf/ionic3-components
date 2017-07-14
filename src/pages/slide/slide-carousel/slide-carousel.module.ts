import { SlideCarouselPage } from './slide-carousel';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SlideCarouselPage,
  ],
  imports: [
    IonicPageModule.forChild(SlideCarouselPage),
  ],
  exports: [
    SlideCarouselPage
  ]
})

export class SlideCarouselPageModule { }
