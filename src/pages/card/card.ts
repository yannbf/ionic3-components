import { CardBadgePage } from './card-badge/card-badge';
import { CardMapPage } from './card-map/card-map';
import { CardSocialPage } from './card-social/card-social';
import { CardImagePage } from './card-image/card-image';
import { CardBackgroundPage } from './card-background/card-background';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})
export class CardListPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = CardListPage;
    this.items = [
      {
        title: 'Cards with Background',
        page: CardBackgroundPage
      },
      {
        title: 'Cards with Image',
        page: CardImagePage
      },
      {
        title: 'Social Cards',
        page: CardSocialPage
      },
      {
        title: 'Cards with Map',
        page: CardMapPage
      },
      {
        title: 'Cards with Badge',
        page: CardBadgePage
      },
    ]
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
