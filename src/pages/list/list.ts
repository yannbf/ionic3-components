import { SlidingItemListPage } from './sliding-item/sliding-item';
import { SettingsListPage } from './settings/settings';
import { ThumbnailListPage } from './thumbnail-list/thumbnail-list';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListsPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = ListsPage;
    this.items = [
      {
        title: 'Thumbnail',
        page: ThumbnailListPage
      },
      {
        title: 'Settings',
        page: SettingsListPage
      },
      {
        title: 'Sliding Item',
        page: SlidingItemListPage
      },
    ]
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
