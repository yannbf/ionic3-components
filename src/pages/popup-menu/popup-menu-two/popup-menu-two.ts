import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-popup-menu-two',
  templateUrl: 'popup-menu-two.html',
})
export class PopupMenuTwoPage {
  openMenu = false;

  constructor(public navCtrl: NavController) { }

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
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
