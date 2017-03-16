import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home-login',
  templateUrl: 'home-login.html'
})
export class HomeLoginPage {

  @ViewChild('player') player;

  constructor(public navCtrl: NavController) { }

  ionViewWillLeave() {
    // the .nativeElement property of the ViewChild is the reference to the <video>
    this.player.nativeElement.src = '';
    this.player.nativeElement.load();
  }

  ionViewWillEnter() {
    this.player.nativeElement.src = 'assets/video/background-480.mp4';
    this.player.nativeElement.load();
  }

  ionViewDidLoad() {
    console.log('Hello HomeLoginPage Page');
  }

  goToSignup() {
  }

  goToLogin() {
  }

}
