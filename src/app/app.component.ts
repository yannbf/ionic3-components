import { IonicOfficialComponentsPage } from '../pages/ionic-official-components/ionic-official-components';
import { LoginListPage } from '../pages/login/login';
import { ThemingPage } from '../pages/theming/theming';
import { AppState } from './app.global';
import { SlidesPage } from '../pages/slide/slide';
import { PopupModalsPage } from '../pages/popup-modal/popup-modal';
import { ListsPage } from '../pages/list/list';
import { PopupMenuListPage } from '../pages/popup-menu/popup-menu';
import { MiscellaneousListPage } from '../pages/miscellaneous/miscellaneous';
import { ProfileListPage } from '../pages/profile/profile';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/_home/home';

import { Subject } from 'rxjs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  activePage = new Subject();

  pages: Array<{ title: string, component: any, active: Boolean }>;
  state: any;

  constructor(public platform: Platform, public global: AppState) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage, active: true },
      { title: 'Ionic Official Components', component: IonicOfficialComponentsPage, active: false },
      { title: 'Login', component: LoginListPage, active: false },
      { title: 'Lists', component: ListsPage, active: false },
      { title: 'Popup Modal', component: PopupModalsPage, active: false },
      { title: 'Miscellaneous', component: MiscellaneousListPage, active: false },
      { title: 'Popup Menu', component: PopupMenuListPage, active: false },
      { title: 'Profile', component: ProfileListPage, active: false },
      // Removed for now as there were breaking changes in slides
      // { title: 'Slides', component: SlidesPage },
      { title: 'Theming', component: ThemingPage, active: false },
    ];

    this.activePage.subscribe((value: any) => {
      this.pages.map(x => x.active = false);
      this.pages[this.pages.findIndex(x => x.title === value.title)].active = true;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.global.set('theme', '');
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
    this.activePage.next(page);
  }
}
