import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users = new Array(10);

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

}
