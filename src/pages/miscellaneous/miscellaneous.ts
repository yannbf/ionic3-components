import { ChatsPage } from './chat/chats';
import { WeatherPage } from './weather/weather';
import { CurrencyConverterPage } from './currency-converter/currency-converter';
import { ParallaxScrollerTwoPage } from './parallax-scroller-two/parallax-scroller-two';
import { ClockPage } from './clock/clock';
import { ParallaxScrollerPage } from './parallax-scroller/parallax-scroller';
import { CountdownOnePage } from './countdown/countdown';
import { TestimonialsPage } from './testimonials/testimonials';
import { TinderCardsPage } from './tinder-cards/tinder-cards';
import { Component } from '@angular/core';

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
                title: 'Tinder Cards',
                page: TinderCardsPage
            },
            {
                title: 'Countdown',
                page: CountdownOnePage
            },
            {
                title: 'Testimonials',
                page: TestimonialsPage
            },
            {
                title: 'Parallax Horizontal Scroller',
                page: ParallaxScrollerPage
            },
            {
                title: 'Parallax Scroller Type two',
                page: ParallaxScrollerTwoPage
            },
            {
                title: 'Clock',
                page: ClockPage
            },
            {
                title: 'Currency Converter',
                page: CurrencyConverterPage
            },
            {
                title: 'Weather',
                page: WeatherPage
            },
            {
                title: 'Chat',
                page: ChatsPage
            },
        ]
    }

    itemTapped(event, item) {
        this.navCtrl.push(item.page);
    }
}
