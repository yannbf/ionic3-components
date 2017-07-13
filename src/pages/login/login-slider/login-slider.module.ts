import { LoginSliderPage } from './login-slider';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    LoginSliderPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginSliderPage),
  ],
  exports: [
    LoginSliderPage
  ]
})

export class LoginSliderPageModule { }
