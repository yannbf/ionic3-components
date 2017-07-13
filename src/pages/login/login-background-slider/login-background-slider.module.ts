import { LoginBackgroundSliderPage } from './login-background-slider';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    LoginBackgroundSliderPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginBackgroundSliderPage),
  ],
  exports: [
    LoginBackgroundSliderPage
  ]
})

export class LoginBackgroundSliderPageModule { }
