import { SlideColorChangingPage } from '../pages/slide/slide-color-changing/slide-color-changing';
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

// Modals
import { ModalsPage } from '../pages/modal/modal';
import { FullModalsPage } from '../pages/modal/full-modal/full-modal';
import { BasicModalPage } from '../pages/modal/full-modal/basic-modal/basic-modal';
import { ParamsModalPage } from '../pages/modal/full-modal/params-modal/params-modal';
import { SmallModalsPage } from '../pages/modal/small-modal/small-modal';
import { HintModalPage } from '../pages/modal/small-modal/hint-modal/hint-modal';
import { SignupModalPage } from '../pages/modal/small-modal/signup-modal/signup-modal';
import { WalkthroughModalPage } from '../pages/modal/small-modal/walkthrough-modal/walkthrough-modal';

// Alerts
import { AlertsPage } from '../pages/alert/alert';

// Slides
import { SlidesPage } from '../pages/slide/slide';
import { SlideTransitionsPage } from '../pages/slide/slide-transitions/slide-transitions';
import { SlideCarouselPage } from '../pages/slide/slide-carousel/slide-carousel';
import { SlidePhotoGalleryPage } from '../pages/slide/slide-photo-gallery/slide-photo-gallery';
import { SlideCustomPaginationPage } from '../pages/slide/slide-custom-pagination/slide-custom-pagination';
import { SliderListTwoPage } from '../pages/slide/slider-list-two/slider-list-two';
import { SliderListPage } from '../pages/slide/slider-list/slider-list';
import { SlideMultirowPage } from '../pages/slide/slide-multirow/slide-multirow';
import { SlideRightToLeftPage } from '../pages/slide/slide-rtl/slide-rtl';
import { SlideFreeModePage } from '../pages/slide/slide-free-mode/slide-free-mode';
import { SlideNestedPage } from '../pages/slide/slide-nested/slide-nested';

// Providers
import { WeatherService } from '../pages/miscellaneous/weather/weather.service';
import { ToastService } from '../providers/util/toast.service';
import { AlertService } from '../providers/util/alert.service';

// Directives
import { Timer } from '../components/countdown-timer/timer';
import { TypingEffect } from '../components/typing-effect/typing-effect';

// Pipes
import { MomentPipe } from '../pipes/moment.pipe';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { OrderByPipe } from '../pipes/orderby.pipe';

export class AppImports {

    public static Pages = [
        // Home
        HomePage,

        // Profile
        ProfileListPage,
        ProfileOnePage,
        ProfileTwoPage,
        ProfileThreePage,
        ProfileFourPage,

        // Miscellaneous
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

        // Cards
        CardListPage,
        CardBackgroundPage,
        CardMapPage,
        CardImagePage,
        CardSocialPage,
        CardBadgePage,

        // Modals
        ModalsPage,
        FullModalsPage,
        BasicModalPage,
        ParamsModalPage,
        SmallModalsPage,
        SignupModalPage,
        WalkthroughModalPage,
        HintModalPage,

        // Buttons
        ButtonsListPage,
        IconButtonsPage,
        ButtonComponentsPage,
        ButtonStylesPage,

        // Lists
        ListsPage,
        SettingsListPage,
        SlidingItemListPage,

        // Alerts
        AlertsPage,

        // Slides
        SlidesPage,
        SlideCarouselPage,
        SlideTransitionsPage,
        SlidePhotoGalleryPage,
        SlideNestedPage,
        SlideFreeModePage,
        SlideRightToLeftPage,
        SlideMultirowPage,
        SliderListPage,
        SliderListTwoPage,
        SlideCustomPaginationPage,
        SlideColorChangingPage,

        // Popup Menu
        PopupMenuListPage,
        PopupMenuOnePage,
    ]

    public static Pipes = [
        TemperaturePipe, MomentPipe, OrderByPipe,
    ]

    public static Providers = [
        WeatherService, AlertService, ToastService
    ]

    public static Directives = [
        Timer,
        TypingEffect,
    ]
}