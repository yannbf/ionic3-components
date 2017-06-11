import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login-background-slider',
  templateUrl: 'login-background-slider.html'
})
export class LoginBackgroundSliderPage {

  backgrounds = [
    "assets/img/background/background-1.jpg",
    "assets/img/background/background-2.jpg",
    "assets/img/background/background-3.jpg",
    "assets/img/background/background-4.jpg"
  ]
  public loginForm: any;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6),
      Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('Hello LoginBackgroundSlider Page');
  }

  openResetPassword() {
  }

  doLogin() {
    if (!this.loginForm.valid) {
      console.log("Invalid or empty data");
    } else {
      let userEmail = this.loginForm.value.email;
      let userPassword = this.loginForm.value.password;

      console.log('user data', userEmail, userPassword);
    }
  }

}
