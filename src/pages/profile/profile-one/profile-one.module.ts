import { ProfileOnePage } from './profile-one';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ProfileOnePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileOnePage),
  ],
  exports: [
    ProfileOnePage
  ]
})

export class ProfileOnePageModule { }
