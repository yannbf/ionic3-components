import { ButtonsListPage } from './button';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ButtonsListPage,
  ],
  imports: [
    IonicPageModule.forChild(ButtonsListPage),
  ],
  exports: [
    ButtonsListPage
  ]
})

export class ButtonsListPageModule { }
