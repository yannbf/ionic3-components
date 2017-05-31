import { ChartsPage } from './charts/charts';
import { BlogPostPage } from './blog-post/blog-post';
import { ChatsPage } from './chat/chats';
// import { WeatherPage } from './weather/weather';
// import { CurrencyConverterPage } from './currency-converter/currency-converter';
import { FlashCardPage } from './flash-card/flash-card';
// import { ClockPage } from './clock/clock';
import { CountdownPage } from './countdown/countdown';
import { TestimonialsPage } from './testimonials/testimonials';
import { TinderCardsPage } from './tinder-cards/tinder-cards';
import { Component } from '@angular/core';
import { ExpandableHeaderPage } from './expandable-header/expandable-header';
import { AutosizingTextarea } from './autosizing-textarea/autosizing-textarea'

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
                title: 'Autosizing Textarea',
                page: AutosizingTextarea
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
                page: CountdownPage
            },
            {
                title: 'Expandable Header',
                page: ExpandableHeaderPage
            },
            {
                title: 'Flash Card',
                page: FlashCardPage
            },
            // {
            //     title: 'Currency Converter',
            //     page: CurrencyConverterPage
            // },
            {
                title: 'Testimonials',
                page: TestimonialsPage
            },
            {
                title: 'Tinder Cards',
                page: TinderCardsPage
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
