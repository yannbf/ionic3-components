import { SideMenuPage } from '../pages/side-menu/side-menu';
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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any, icon: string }>;
  rightMenuItems: Array<{ icon: string, active: boolean }>;
  state: any;

  constructor(public platform: Platform, public global: AppState) {
    this.initializeApp();
    this.rightMenuItems = [
      { icon: 'home', active: true },
      { icon: 'alarm', active: false },
      { icon: 'analytics', active: false },
      { icon: 'archive', active: false },
      { icon: 'basket', active: false },
      { icon: 'body', active: false },
      { icon: 'bookmarks', active: false },
      { icon: 'camera', active: false },
      { icon: 'beer', active: false },
      { icon: 'power', active: false },
    ]

    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Ionic Official Components', component: IonicOfficialComponentsPage, icon: 'alarm' },
      { title: 'Login', component: LoginListPage, icon: 'archive' },
      { title: 'Lists', component: ListsPage, icon: 'body' },
      { title: 'Popup Modal', component: PopupModalsPage, icon: 'basket' },
      { title: 'Miscellaneous', component: MiscellaneousListPage, icon: 'bookmarks' },
      { title: 'Popup Menu', component: PopupMenuListPage, icon: 'beer' },
      { title: 'Profile', component: ProfileListPage, icon: 'camera' },
      { title: 'Side Menu', component: SideMenuPage, icon: 'bookmark' },
      // Removed for now as there were breaking changes in slides
      // { title: 'Slides', component: SlidesPage, icon: 'home' },
      { title: 'Theming', component: ThemingPage, icon: 'power' },
    ];

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
  }

  rightMenuClick(item) {
    this.rightMenuItems.map(menuItem => menuItem.active = false);
    item.active = true;
  }
}
