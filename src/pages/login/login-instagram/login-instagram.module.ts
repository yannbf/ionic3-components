import { LoginInstagramPage } from './login-instagram';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    LoginInstagramPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginInstagramPage),
  ],
  exports: [
    LoginInstagramPage
  ]
})

export class LoginInstagramPageModule { }
