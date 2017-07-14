// import { FormBuilder, FormControl, Validator } from '@angular/forms';
import { Component } from '@angular/core';
import { AlertController, App, LoadingController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login-one',
  templateUrl: 'login-one.html',
})
export class LoginOnePage {

  public loginForm: any;
  public backgroundImage = 'assets/img/background/background-5.jpg';

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App
  ) { }

  login() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
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
