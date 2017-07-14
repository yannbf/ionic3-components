import { LoginBackgroundVideoPage } from './login-background-video';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    LoginBackgroundVideoPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginBackgroundVideoPage),
  ],
  exports: [
    LoginBackgroundVideoPage
  ]
})

export class LoginBackgroundVideoPageModule { }
