import { SharedModule } from '../../../../app/shared.module';
import { MessagesPage } from './messages';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    MessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagesPage),
    SharedModule,
  ],
  exports: [
    MessagesPage
  ]
})

export class MessagesPageModule { }
