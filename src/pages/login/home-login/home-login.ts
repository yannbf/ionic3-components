import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home-login',
  templateUrl: 'home-login.html'
})
export class HomeLoginPage {

  public backgroundImage: any;
  @ViewChild('player') player;

  constructor(public navCtrl: NavController) {
    this.backgroundImage = this.getRandomPicture();
  }

  ionViewWillLeave() {
    console.log('partiu');
    // the .nativeElement property of the ViewChild is the reference to the <video> 
    this.player.nativeElement.src = '';
    this.player.nativeElement.load();
  }

  ionViewWillEnter() {
    this.player.nativeElement.src = 'assets/background-480.mp4';
    this.player.nativeElement.load();
  }

  ionViewDidLoad() {
    console.log('Hello HomeLoginPage Page');
  }

  getRandomPicture() {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    return "assets/img/login/login-" + randomNumber + ".jpg";
  }

  goToSignup() {
    this.navCtrl.push(SignupPage);
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

}
