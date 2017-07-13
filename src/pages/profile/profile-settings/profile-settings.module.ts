import { ProfileSettingsPage } from './profile-settings';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ProfileSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileSettingsPage),
  ],
  exports: [
    ProfileSettingsPage
  ]
})

export class ProfileSettingsPageModule { }
