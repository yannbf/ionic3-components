import { Component } from '@angular/core';
import { NavController, MenuController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-popup-menu',
  templateUrl: 'popup-menu.html'
})
export class PopupMenuListPage {
  rootPage: any;
  items: Array<{ title: string, page: any }> = [];

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.rootPage = PopupMenuListPage;
    this.items = [
      {
        title: 'Type One',
        page: 'PopupMenuOnePage'
      },
      {
        title: 'Type Two',
        page: 'PopupMenuTwoPage'
      },
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
