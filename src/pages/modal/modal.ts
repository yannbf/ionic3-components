import { SmallModalsPage } from './small-modal/small-modal';
import { FullModalsPage } from './full-modal/full-modal';
import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';

@Component({
    selector: 'page-modal',
    templateUrl: 'modal.html'
})
export class ModalsPage {
    rootPage: any;
    items: Array<{ title: string, page: any }>;

    constructor(public navCtrl: NavController, public menu: MenuController) {
        this.rootPage = ModalsPage;
        this.items = [
            {
                title: 'Full Page Modal',
                page: FullModalsPage
            },
            {
                title: 'Small Modal',
                page: SmallModalsPage
            },
        ]
    }

    itemTapped(event, item) {
        console.log('asjdiashd');
        this.navCtrl.push(item.page);
    }
}
