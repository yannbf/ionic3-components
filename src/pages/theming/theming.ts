import { AppState } from '../../app/app.global';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-theming',
  templateUrl: 'theming.html'
})
export class ThemingPage {

  /*
    Thanks to Scott: https://github.com/ScottMBerger for this feature!
  */

  constructor(public navCtrl: NavController, public global: AppState) { }

  changeTheme(theme) {
    this.global.set('theme', theme);
  }
}
