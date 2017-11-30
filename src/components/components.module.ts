import { TimelineComponentModule } from './timeline/timeline.module';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { Timer } from './countdown-timer/timer';
import { TimerProgress } from './timer-progress/timer-progress';
import { ExpandableHeader } from './expandable-header/expandable-header';
import { FlashCardComponent } from './flash-card/flash-card';
import { AccordionListComponent } from './accordion-list/accordion-list';

export const components = [
  Timer,
  TimerProgress,
  ExpandableHeader,
  FlashCardComponent,
  AccordionListComponent,
];

@NgModule({
  declarations: [components],
  imports: [IonicModule],
  exports: [components, TimelineComponentModule]
})
export class ComponentsModule {}
