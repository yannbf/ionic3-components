import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})
export class CardsListPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'CardsListPage';
    this.items = [
      {
        title: 'Cards with Background',
        page: 'CardBackgroundPage'
      },
      {
        title: 'Cards with Image',
        page: 'CardImagePage'
      },
      {
        title: 'Social Cards',
        page: 'CardSocialPage'
      },
      {
        title: 'Cards with Map',
        page: 'CardMapPage'
      },
      {
        title: 'Cards with Badge',
        page: 'CardBadgePage'
      },
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
