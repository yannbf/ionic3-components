import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-parallax-scroller',
  templateUrl: 'parallax-scroller.html'
})
export class ParallaxScrollerPage {

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello Parallax Scroller Page');
  }

}
