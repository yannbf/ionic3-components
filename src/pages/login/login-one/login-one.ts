import { AlertController, App, LoadingController, NavController } from 'ionic-angular';
// import { FormBuilder, FormControl, Validator } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'page-login-one',
  templateUrl: 'login-one.html',
})
export class LoginOnePage {

  public loginForm: any;
  public backgroundImage = "assets/img/background/background-5.jpg";

  constructor(private navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public app: App) { }

  login() {
    let loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      let alert = this.alertCtrl.create({
        title: 'Logged in!',
        subTitle: 'Thanks for logging in.',
        buttons: ['Dismiss']
      });
      alert.present();
    });

    loading.present();

  }

  goToSignup() {
    // this.navCtrl.push(SignupPage);
  }

  goToResetPassword() {
    // this.navCtrl.push(ResetPasswordPage);
  }
}
