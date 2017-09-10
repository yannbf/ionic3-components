import { Component } from '@angular/core';

import { NavController, MenuController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfileListPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.rootPage = 'ProfileListPage';
    this.menu.enable(true, 'menu-profile');
    this.items = [
      {
        title: 'Type One',
        page: 'ProfileOnePage'
      },
      // {
      //   title: 'Type Two',
      //   page: ProfileTwoPage
      // },
      {
        title: 'Type Three',
        page: 'ProfileThreePage'
      },
      {
        title: 'Type Four',
        page: 'ProfileFourPage'
      },
      {
        title: 'Type Five',
        page: 'ProfileFivePage'
      },
      {
        title: 'Profile Settings',
        page: 'ProfileSettingsPage'
      },
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
