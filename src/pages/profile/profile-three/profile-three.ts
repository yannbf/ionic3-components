import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile-three',
  templateUrl: 'profile-three.html'
})
export class ProfileThreePage {

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello ProfileThree Page');
  }

}
