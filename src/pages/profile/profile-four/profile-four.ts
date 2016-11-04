import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile-four',
  templateUrl: 'profile-four.html'
})
export class ProfileFourPage {

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello ProfileFour Page');
  }

}
