import { SlidesPage } from './slides';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SlidesPage,
  ],
  imports: [
    IonicPageModule.forChild(SlidesPage),
  ],
  exports: [
    SlidesPage
  ]
})

export class SlidesPageModule { }
