import { SharedModule } from '../../../app/shared.module';
import { CountdownPage } from './countdown';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CountdownPage,
  ],
  imports: [
    IonicPageModule.forChild(CountdownPage),
    SharedModule,
  ],
  exports: [
    CountdownPage
  ]
})

export class CountdownPageModule { }
