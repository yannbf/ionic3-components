import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReactiveListLabelPage } from './reactive-list-label';
import { DirectivesModule } from '../../../directives/directives.module';

@NgModule({
  declarations: [
    ReactiveListLabelPage,
  ],
  imports: [
    IonicPageModule.forChild(ReactiveListLabelPage),
    DirectivesModule
  ],
})
export class ReactiveListLabelPageModule {}
