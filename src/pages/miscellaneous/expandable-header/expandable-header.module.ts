import { SharedModule } from '../../../app/shared.module';
import { ExpandableHeaderPage } from './expandable-header';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ExpandableHeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpandableHeaderPage),
    SharedModule,
  ],
  exports: [
    ExpandableHeaderPage
  ]
})

export class ExpandableHeaderPageModule { }
