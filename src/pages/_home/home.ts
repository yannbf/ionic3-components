import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options = [
    {
      selected: false,
      image: 'https://www.shareicon.net/data/128x128/2016/04/22/753629_people_512x512.png',
      text: 'Beginner',
    },
    {
      selected: false,
      image: 'https://www.shareicon.net/data/128x128/2016/04/22/753631_character_512x512.png',
      text: 'Intermediate',
    },
    {
      selected: false,
      image: 'https://www.shareicon.net/data/128x128/2016/04/22/753637_wizard_512x512.png',
      text: 'Advanced',
    },
  ]

  drawerOptions: any;
  constructor(public navCtrl: NavController) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
  }
}
