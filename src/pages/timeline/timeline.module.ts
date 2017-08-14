import { TimelinePage } from './timeline';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [
    TimelinePage,
  ],
  imports: [
    IonicPageModule.forChild(TimelinePage),
    SharedModule
  ],
  exports: [
    TimelinePage
  ]
})

export class TimelinePageModule { }
