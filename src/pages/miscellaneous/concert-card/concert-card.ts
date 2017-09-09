import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-concert-card',
  templateUrl: 'concert-card.html',
})
export class ConcertCardPage {

  concerts = [
    {
      name: 'yeezy world tour 2017',
      artistName: 'Kanye West',
      artistImage: 'assets/img/misc/kanye_west.png',
      color: '#f73e53'
    },
    {
      name: 'yeezy world tour 2017',
      artistName: 'Kanye West',
      artistImage: 'assets/img/misc/kanye_west.png',
      color: '#0be3ff'
    },
    {
      name: 'yeezy world tour 2017',
      artistName: 'Kanye West',
      artistImage: 'assets/img/misc/kanye_west.png',
      color: '#fdd427'
    },
  ];

  constructor(public navCtrl: NavController) { }
}
