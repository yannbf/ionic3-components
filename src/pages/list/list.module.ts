import { ListPage } from './list';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ListPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPage),
  ],
  exports: [
    ListPage
  ]
})

export class ListsPageModule { }
