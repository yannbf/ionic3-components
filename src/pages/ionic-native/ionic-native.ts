import { RuntimePermissionsPage } from './runtime-permissions/runtime-permissions';
import { GetImagePage } from './get-image/get-image';
import { CreditCardScanPage } from './credit-card-scan/credit-card-scan';
import { BarcodescannerPage } from './barcodescanner/barcodescanner';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ionic-native',
  templateUrl: 'ionic-native.html',
})
export class IonicNativePage {

    rootPage: any;
    items: Array<{ title: string, page: any }>;

    constructor(public navCtrl: NavController) {
        this.rootPage = IonicNativePage;

        this.items = [
            {
                title: 'Barcode scan',
                page: BarcodescannerPage
            },
            {
                title: 'Credit card scanning',
                page: CreditCardScanPage
            },
            {
                title: 'Get image from camera/gallery',
                page: GetImagePage
            },
            {
                title: 'Runtime permissions',
                page: RuntimePermissionsPage
            },
        ]
    }

    itemTapped(event, item) {
        this.navCtrl.push(item.page);
    }
}
