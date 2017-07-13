import { Component } from '@angular/core';

import { NavController, MenuController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-countdown',
  templateUrl: 'countdown.html'
})
export class CountdownPage {

  constructor(
      public navCtrl: NavController,
      public menu: MenuController
  ) { }
}
