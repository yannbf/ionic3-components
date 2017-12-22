import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReactiveListLabelPage } from './reactive-list-label';

@NgModule({
  declarations: [
    ReactiveListLabelPage,
  ],
  imports: [
    IonicPageModule.forChild(ReactiveListLabelPage),
  ],
})
export class ReactiveListLabelPageModule {}
