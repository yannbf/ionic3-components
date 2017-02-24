import { PopupMenuOnePage } from './popup-menu-one/popup-menu-one';
import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-popup-menu',
  templateUrl: 'popup-menu.html'
})
export class PopupMenuListPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.rootPage = PopupMenuListPage;
    this.items = [
      {
        title: 'Type One',
        page: PopupMenuOnePage
      },
    ]
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
