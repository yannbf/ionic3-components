import { SignupModalPage } from './signup-modal';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SignupModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupModalPage),
  ],
  exports: [
    SignupModalPage
  ]
})

export class SignupModalPageModule { }
