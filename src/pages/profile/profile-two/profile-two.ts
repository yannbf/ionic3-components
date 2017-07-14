import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-two',
  templateUrl: 'profile-two.html'
})
export class ProfileTwoPage {
  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello ProfileTwo Page');
  }
}
