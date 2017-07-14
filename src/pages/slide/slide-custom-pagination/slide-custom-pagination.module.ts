import { SlideCustomPaginationPage } from './slide-custom-pagination';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SlideCustomPaginationPage,
  ],
  imports: [
    IonicPageModule.forChild(SlideCustomPaginationPage),
  ],
  exports: [
    SlideCustomPaginationPage
  ]
})

export class SlideCustomPaginationPageModule { }
