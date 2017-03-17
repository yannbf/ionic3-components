import { LoginBackgroundVideoPage } from './login-background-video/login-background-video';
import { LoginSliderPage } from './login-slider/login-slider';
import { LoginInstagramPage } from './login-instagram/login-instagram';
import { Component } from '@angular/core';

import { LoginOnePage } from './login-one/login-one';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginListPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = LoginListPage;
    this.items = [
      {
        title: 'Type one',
        page: LoginOnePage
      },
      {
        title: 'Instagram style',
        page: LoginInstagramPage
      },
      {
        title: 'Login with slider text (not working)',
        page: LoginSliderPage
      },
      {
        title: 'Login with video background',
        page: LoginBackgroundVideoPage
      },
    ]
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
