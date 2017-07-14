import { ProfileTwoPage } from './profile-two';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ProfileTwoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileTwoPage),
  ],
  exports: [
    ProfileTwoPage
  ]
})

export class ProfileTwoPageModule { }
