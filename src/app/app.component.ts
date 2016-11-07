import { SlidesPage } from '../pages/slide/slide';
import { AlertsPage } from '../pages/alert/alert';
import { ModalsPage } from '../pages/modal/modal';
import { ListsPage } from '../pages/list/list';
import { ButtonsListPage } from '../pages/button/button';
import { CardListPage } from '../pages/card/card';
import { PopupMenuListPage } from '../pages/popup-menu/popup-menu';
import { MiscellaneousListPage } from '../pages/miscellaneous/miscellaneous';
import { ProfileListPage } from '../pages/profile/profile';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/_home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Cards', component: CardListPage },
      { title: 'Buttons', component: ButtonsListPage },
      { title: 'Alerts', component: AlertsPage },
      { title: 'Modals', component: ModalsPage },
      { title: 'Lists', component: ListsPage },
      { title: 'Slides', component: SlidesPage },
      { title: 'Popup Menu', component: PopupMenuListPage },
      { title: 'Profile', component: ProfileListPage },
      { title: 'Miscellaneous', component: MiscellaneousListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
