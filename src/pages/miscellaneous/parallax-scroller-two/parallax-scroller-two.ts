import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-parallax-scroller-two',
  templateUrl: 'parallax-scroller-two.html'
})
export class ParallaxScrollerTwoPage {

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello Parallax Scroller Two Page');
  }

}
