import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile-two',
  templateUrl: 'profile-two.html'
})
export class ProfileTwoPage {
  menu_is_open = false;
  constructor(public navCtrl: NavController) { }

  togglePopupMenu() {
    return this.menu_is_open = !this.menu_is_open;
  };

  ionViewDidLoad() {
    console.log('Hello ProfileTwo Page');
  }

  goToAccount() {
    alert('Account clicked.');
    this.togglePopupMenu();
  }

  goToHome() {
    alert('Home clicked.');
    this.togglePopupMenu();
  }

  goToCups() {
    alert('Cups clicked.');
    this.togglePopupMenu();
  }

  goToLeaderboard() {
    alert('Leaderboard clicked.');
    this.togglePopupMenu();
  }

  goToHelp() {
    alert('Help clicked.');
    this.togglePopupMenu();
  }

  goToShop() {
    alert('Shop clicked.');
    this.togglePopupMenu();
  }
}
