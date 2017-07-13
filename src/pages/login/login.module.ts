import { LoginListPage } from './login';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    LoginListPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginListPage),
  ],
  exports: [
    LoginListPage
  ]
})

export class LoginListPageModule { }
