import { ToastService } from '../providers/util/toast.service';
import { AlertService } from '../providers/util/alert.service';
import { SliderListPage } from '../pages/list/slider-list/slider-list';
import { MyApp } from './app.component';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SwingModule } from 'angular2-swing';

// Home Page
import { HomePage } from '../pages/_home/home';

// Profile list
import { ProfileListPage } from '../pages/profile/profile';
import { ProfileOnePage } from '../pages/profile/profile-one/profile-one';
import { ProfileTwoPage } from '../pages/profile/profile-two/profile-two';
import { ProfileThreePage } from '../pages/profile/profile-three/profile-three';
import { ProfileFourPage } from '../pages/profile/profile-four/profile-four';

// Lists list
import { ListsPage } from '../pages/list/list';
import { SlidingItemListPage } from '../pages/list/sliding-item/sliding-item';
import { SettingsListPage } from '../pages/list/settings/settings';

// Miscellaneous list
import { MiscellaneousListPage } from '../pages/miscellaneous/miscellaneous';
import { ClockPage } from '../pages/miscellaneous/clock/clock';
import { CountdownOnePage } from '../pages/miscellaneous/countdown/countdown';
import { TinderCardsPage } from '../pages/miscellaneous/tinder-cards/tinder-cards';
import { TestimonialsPage } from '../pages/miscellaneous/testimonials/testimonials';
import { ParallaxScrollerPage } from '../pages/miscellaneous/parallax-scroller/parallax-scroller';
import { CurrencyConverterPage } from '../pages/miscellaneous/currency-converter/currency-converter';
import { WeatherPage } from '../pages/miscellaneous/weather/weather';
import { MessagesPage } from '../pages/miscellaneous/chat/messages/messages';
import { ChatsPage } from '../pages/miscellaneous/chat/chats';

// Popup Menu list
import { PopupMenuListPage } from '../pages/popup-menu/popup-menu';
import { PopupMenuOnePage } from '../pages/popup-menu/popup-menu-one/popup-menu-one';

// Cards list
import { CardListPage } from '../pages/card/card';
import { CardSocialPage } from '../pages/card/card-social/card-social';
import { CardImagePage } from '../pages/card/card-image/card-image';
import { CardMapPage } from '../pages/card/card-map/card-map';
import { CardBackgroundPage } from '../pages/card/card-background/card-background';
import { CardBadgePage } from '../pages/card/card-badge/card-badge';

// Buttons list
import { ButtonsListPage } from '../pages/button/button';
import { ButtonStylesPage } from '../pages/button/button-styles/button-styles';
import { IconButtonsPage } from '../pages/button/icon-buttons/icon-buttons';
import { ButtonComponentsPage } from '../pages/button/button-components/button-components';

// Providers
import { WeatherService } from '../pages/miscellaneous/weather/weather.service';

// Directives
import { Timer } from '../components/countdown-timer/timer';
import { TypingEffect } from '../components/typing-effect/typing-effect';

// Pipes
import { MomentPipe } from '../pipes/moment/moment.pipe';
import { TemperaturePipe } from '../pages/miscellaneous/weather/temperature.pipe';

@NgModule({
  declarations: [
    MyApp,

    // Pages
    HomePage,
    ProfileListPage,
    ProfileOnePage,
    ProfileTwoPage,
    ProfileThreePage,
    ProfileFourPage,
    MiscellaneousListPage,
    PopupMenuListPage,
    PopupMenuOnePage,
    TestimonialsPage,
    TinderCardsPage,
    CountdownOnePage,
    ParallaxScrollerPage,
    CurrencyConverterPage,
    ClockPage,
    WeatherPage,
    ChatsPage,
    MessagesPage,
    CardListPage,
    CardBackgroundPage,
    CardMapPage,
    CardImagePage,
    CardSocialPage,
    CardBadgePage,
    ButtonsListPage,
    IconButtonsPage,
    ButtonComponentsPage,
    ButtonStylesPage,
    ListsPage,
    SettingsListPage,
    SlidingItemListPage,
    SliderListPage,

    // directives    
    Timer,
    TypingEffect,

    // pipes
    TemperaturePipe,
    MomentPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    SwingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfileListPage,
    ProfileOnePage,
    ProfileTwoPage,
    ProfileThreePage,
    ProfileFourPage,
    MiscellaneousListPage,
    PopupMenuListPage,
    PopupMenuOnePage,
    TestimonialsPage,
    TinderCardsPage,
    CountdownOnePage,
    ParallaxScrollerPage,
    CurrencyConverterPage,
    ClockPage,
    WeatherPage,
    ChatsPage,
    MessagesPage,
    CardListPage,
    CardBackgroundPage,
    CardMapPage,
    CardImagePage,
    CardSocialPage,
    CardBadgePage,
    ButtonsListPage,
    ButtonStylesPage,
    IconButtonsPage,
    ButtonComponentsPage,
    ListsPage,
    SettingsListPage,
    SlidingItemListPage,
    SliderListPage,

  ],
  providers: [WeatherService, AlertService, ToastService]
})
export class AppModule { }
