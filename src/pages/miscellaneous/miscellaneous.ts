import { GetImagePage } from './get-image/get-image';
import { ChartsPage } from './charts/charts';
import { CreditCardScanPage } from './credit-card-scan/credit-card-scan';
import { BlogPostPage } from './blog-post/blog-post';
import { ChatsPage } from './chat/chats';
// import { WeatherPage } from './weather/weather';
// import { CurrencyConverterPage } from './currency-converter/currency-converter';
import { FlashCardPage } from './flash-card/flash-card';
import { BarcodescannerPage } from './barcodescanner/barcodescanner';
// import { ClockPage } from './clock/clock';
import { CountdownOnePage } from './countdown/countdown';
import { TestimonialsPage } from './testimonials/testimonials';
import { TinderCardsPage } from './tinder-cards/tinder-cards';
import { Component } from '@angular/core';
import { RuntimePermissionsPage } from './runtime-permissions/runtime-permissions';
import { ExpandableHeaderPage } from './expandable-header/expandable-header';

import { NavController, MenuController } from 'ionic-angular';

@Component({
    selector: 'page-miscellaneous',
    templateUrl: 'miscellaneous.html'
})
export class MiscellaneousListPage {
    rootPage: any;
    items: Array<{ title: string, page: any }>;

    constructor(public navCtrl: NavController, public menu: MenuController) {
        this.items = [
            {
                title: 'Barcode Scanner',
                page: BarcodescannerPage
            },
            {
                title: 'Blog Post',
                page: BlogPostPage
            },
            {
                title: 'Charts',
                page: ChartsPage
            },
            {
                title: 'Chat',
                page: ChatsPage
            },
            {
                title: 'Countdown',
                page: CountdownOnePage
            },
            {
                title: 'Credit Card Scanner',
                page: CreditCardScanPage
            },
            {
                title: 'Get image from camera/gallery',
                page: GetImagePage
            },
            // {
            //     title: 'Currency Converter',
            //     page: CurrencyConverterPage
            // },
            {
                title: 'Runtime User Permissions',
                page: RuntimePermissionsPage
            },
            {
                title: 'Testimonials',
                page: TestimonialsPage
            },
            {
                title: 'Tinder Cards',
                page: TinderCardsPage
            },
            {
                title: 'Flash Card',
                page: FlashCardPage
            },
            {
                title: 'Expandabl Header',
                page: ExpandableHeaderPage
            },
            // {
            //     title: 'Weather',
            //     page: WeatherPage
            // },
        ]
    }

    itemTapped(event, item) {
        this.navCtrl.push(item.page);
    }
}
