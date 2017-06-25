// Global state (used for theming)
import { AppState } from './app.global';

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
import { SlideColorChangingPage } from '../pages/slide/slide-color-changing/slide-color-changing';

// Providers
// import { WeatherService } from '../pages/miscellaneous/weather/weather.service';
import { ToastService } from '../providers/util/toast.service';
import { AlertService } from '../providers/util/alert.service';
import { CameraProvider } from '../providers/util/camera.provider';
import { NativeGoogleMapsProvider } from '../providers/native-google-maps/native-google-maps';

// Ionic native providers
import { CardIO } from '@ionic-native/card-io';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from '@ionic-native/google-maps';

// Directives
import { SlidingDrawer } from '../components/sliding-drawer/sliding-drawer';
import { Autosize } from '../components/autosize/autosize';

// Components
import { Timer } from '../components/countdown-timer/timer';
import { TimerProgress } from '../components/timer-progress/timer-progress';
import { ExpandableHeader } from '../components/expandable-header/expandable-header';
import { TypingEffect } from '../components/typing-effect/typing-effect';
import { FlashCardComponent } from '../components/flash-card/flash-card';

// Pipes
import { MomentPipe } from '../pipes/moment.pipe';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { OrderByPipe } from '../pipes/orderby.pipe';
import { ShortenStringPipe } from '../pipes/shorten.pipe';
import { CapitalizePipe } from '../pipes/capitalize.pipe';

// Modules
import { SwingModule } from 'angular2-swing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

export const Modules = [
    SwingModule,
    BrowserModule,
    HttpModule,
]

export const Pages = [
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
]

export const Pipes = [
    TemperaturePipe, MomentPipe, OrderByPipe, CapitalizePipe, ShortenStringPipe
]

export const Providers = [
    // WeatherService,
    AlertService,
    ToastService,
    AppState,
    CameraProvider,
    NativeGoogleMapsProvider,

    // Ionic native specific providers
    BarcodeScanner,
    Camera,
    Diagnostic,
    Geolocation,
    CardIO,
    StatusBar,
    SplashScreen,
    GoogleMaps,
]

export const Components = [
    FlashCardComponent,
    TimerProgress,
    Timer,
    ExpandableHeader,
    Autosize
]

export const Directives = [
    SlidingDrawer,
    Timer,
    Autosize,
]