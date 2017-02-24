import { AlertsPage } from './alert/alert';
import { ButtonsListPage } from './button/button';
import { CardListPage } from './card/card';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-ionic-official-components',
    templateUrl: 'ionic-official-components.html'
})
export class IonicOfficialComponentsPage {
    rootPage: any;
    items: Array<{ title: string, page: any }>;

    constructor(public navCtrl: NavController) {
        this.rootPage = CardListPage;

        this.items = [
            {
                title: 'Buttons',
                page: ButtonsListPage
            },
            {
                title: 'Alerts',
                page: AlertsPage
            },
            {
                title: 'Cards',
                page: CardListPage
            },
        ]
    }

    itemTapped(event, item) {
        this.navCtrl.push(item.page);
    }
}
