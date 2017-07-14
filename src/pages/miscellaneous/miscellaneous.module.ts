import { MiscellaneousListPage } from './miscellaneous';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    MiscellaneousListPage,
  ],
  imports: [
    IonicPageModule.forChild(MiscellaneousListPage),
  ],
  exports: [
    MiscellaneousListPage
  ]
})

export class MiscellaneousListPageModule { }
