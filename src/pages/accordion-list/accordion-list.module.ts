import { SharedModule } from '../../app/shared.module';
import { NgModule } from '@angular/core';
import { AccordionListPage } from './accordion-list';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    AccordionListPage,
  ],
  imports: [
    IonicPageModule.forChild(AccordionListPage),
    SharedModule
  ],
  exports: [
    AccordionListPage
  ]
})

export class AccordionListPageModule { }
