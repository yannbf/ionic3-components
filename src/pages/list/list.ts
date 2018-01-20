import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'ListsPage';
    this.items = [
      {
        title: 'Settings',
        page : 'SettingsListPage'
      },
      {
        title: 'Sliding Item',
        page : 'SlidingItemPage'
      },
      {
        title: 'Delete Items',
        page: 'DeleteItemsPage'
      },
      {
        title: 'Reactive List Label',
        page: 'ReactiveListLabelPage'
      },
      {
        title: 'Users Listing',
        page: 'UsersPage'
      },
      {
        title: 'Crypto Currencies',
        page: 'CryptoListPage'
      }
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
