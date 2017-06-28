import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlideWalkthroughPage } from './slide-walkthrough';

@NgModule({
  declarations: [
    SlideWalkthroughPage,
  ],
  imports: [
    IonicPageModule.forChild(SlideWalkthroughPage),
  ],
  exports: [
    SlideWalkthroughPage
  ]
})
export class SlideWalkthroughPageModule {}
