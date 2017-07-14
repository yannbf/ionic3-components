import { ProfileListPage } from './profile';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ProfileListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileListPage),
  ],
  exports: [
    ProfileListPage
  ]
})

export class ProfileListPageModule { }
