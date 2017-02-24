import { ButtonComponentsPage } from './button-components/button-components';
import { IconButtonsPage } from './icon-buttons/icon-buttons';
import { ButtonStylesPage } from './button-styles/button-styles';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-button',
  templateUrl: 'button.html'
})
export class ButtonsListPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = ButtonsListPage;
    this.items = [
      {
        title: 'Button Styles',
        page: ButtonStylesPage
      },
      {
        title: 'Icon Buttons',
        page: IconButtonsPage
      },
      {
        title: 'Buttons in Components',
        page: ButtonComponentsPage
      },
    ]
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
