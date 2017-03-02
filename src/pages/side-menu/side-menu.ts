import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuPage {

  MENU = {
    DEFAULT: "menu-components",
    AVATAR: "menu-avatar"
  }

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) { }

  ionViewDidLoad() {
  }

  changeMenu(menu) {
    // Disables all other sidemenus
    Object.keys(this.MENU).map(k => this.menuCtrl.enable(false, this.MENU[k]));

    // Enables then open the selected menu
    this.menuCtrl.enable(true, menu);
    this.menuCtrl.open(menu);
  }

  toggleRightMenu() {
    this.menuCtrl.open("menu-right");
  }

}
