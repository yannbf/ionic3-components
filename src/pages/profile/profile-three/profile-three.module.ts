import { ProfileThreePage } from './profile-three';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ProfileThreePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileThreePage),
  ],
  exports: [
    ProfileThreePage
  ]
})

export class ProfileThreePageModule { }
