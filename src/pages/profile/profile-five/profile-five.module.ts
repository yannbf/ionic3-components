import { ParallaxHeaderDirectiveModule } from './../../../components/parallax-header/parallax-header.module';
import { ProfileFivePage } from './profile-five';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ProfileFivePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileFivePage),
    ParallaxHeaderDirectiveModule
  ],
  exports: [
    ProfileFivePage
  ]
})

export class ProfileFivePageModule { }
