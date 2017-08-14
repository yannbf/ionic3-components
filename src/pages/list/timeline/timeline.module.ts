import { TimelinePage } from './timeline';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    TimelinePage,
  ],
  imports: [
    IonicPageModule.forChild(TimelinePage),
  ],
  exports: [
    TimelinePage
  ]
})

export class SlidingItemPageModule { }
