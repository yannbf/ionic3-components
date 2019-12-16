import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-member',
  templateUrl: 'member.html',
})
export class MemberPage {
  memberInfo: any;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.memberInfo = this.navParams.data;
  }

}
