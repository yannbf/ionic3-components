import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-popup-menu-one',
  templateUrl: 'popup-menu-one.html'
})
export class PopupMenuOnePage {
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
