import { LoginOnePage } from './login-one';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    LoginOnePage,
  ],
  imports: [
    IonicPageModule.forChild(LoginOnePage),
  ],
  exports: [
    LoginOnePage
  ]
})

export class LoginOnePageModule { }
