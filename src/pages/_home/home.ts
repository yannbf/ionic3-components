import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [
    {
      selected: false,
      image: 'https://www.shareicon.net/data/128x128/2016/04/22/753629_people_512x512.png',
      text: 'Beginner',
      value: 'Beginner v',
    },
    {
      selected: false,
      image: 'https://www.shareicon.net/data/128x128/2016/04/22/753631_character_512x512.png',
      text: 'Intermediate',
      value: 'Intermediate v',
    },
    {
      selected: false,
      image: 'https://www.shareicon.net/data/128x128/2016/04/22/753637_wizard_512x512.png',
      text: 'Advanced',
      value: 'Advanced v',
    },
  ]

  options = {
    borderColor: '#FFFF00',
    textColor: '#FF00FF',
    checkIcon: 'heart',
    animated: false
  }

  teste;

  drawerOptions: any;
  constructor(public navCtrl: NavController) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
  }

  show(){
    console.log(this.teste);
  }
}
