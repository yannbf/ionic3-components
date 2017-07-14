import { ProfileFourPage } from './profile-four';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ProfileFourPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileFourPage),
  ],
  exports: [
    ProfileFourPage
  ]
})

export class ProfileFourPageModule { }
