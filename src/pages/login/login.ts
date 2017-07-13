import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginListPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'LoginListPage';
    this.items = [
      {
        title: 'Type one',
        page:  'LoginOnePage'
      },
      {
        title: 'Instagram style',
        page:  'LoginInstagramPage'
      },
      {
        title: 'Login with slider text',
        page:  'LoginSliderPage'
      },
      {
        title: 'Login with video background',
        page:  'LoginBackgroundVideoPage'
      },
      {
        title: 'Login with slider background',
        page:  'LoginBackgroundSliderPage'
      },
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
