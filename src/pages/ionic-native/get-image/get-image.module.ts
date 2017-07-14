import { GetImagePage } from './get-image';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    GetImagePage,
  ],
  imports: [
    IonicPageModule.forChild(GetImagePage),
  ],
  exports: [
    GetImagePage
  ]
})

export class GetImagePageModule { }
