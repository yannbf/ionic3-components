import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-button',
  templateUrl: 'button.html'
})
export class ButtonsListPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'ButtonsListPage';
    this.items = [
      {
        title: 'Button Styles',
        page: 'ButtonStylesPage'
      },
      {
        title: 'Icon Buttons',
        page: 'IconButtonsPage'
      },
      {
        title: 'Buttons in Components',
        page: 'ButtonComponentsPage'
      },
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
