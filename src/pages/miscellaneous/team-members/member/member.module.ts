import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberPage } from './member';
import { SharedModule } from '../../../../app/shared.module';

@NgModule({
  declarations: [
    MemberPage
  ],
  imports: [
    IonicPageModule.forChild(MemberPage),
    SharedModule,
  ],
  exports: [
    MemberPage,
  ]
})

export class MemberModule { }
