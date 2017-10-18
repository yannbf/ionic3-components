import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import {
    TimelineComponent,
    TimelineItemComponent,
    TimelineTimeComponent
} from './timeline';

export const components = [
];

@NgModule({
  declarations: [
    TimelineComponent,
    TimelineItemComponent,
    TimelineTimeComponent,
  ],
  imports: [IonicModule],
  exports: [
    TimelineComponent,
    TimelineItemComponent,
    TimelineTimeComponent,
  ]
})
export class TimelineComponentModule {}
