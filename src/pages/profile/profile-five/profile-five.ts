import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-five',
  templateUrl: 'profile-five.html',
})
export class ProfileFivePage {

  user = {
    name: 'Cosima Niehaus',
    profileImage: 'assets/img/avatar/girl-avatar.png',
    coverImage: 'assets/img/background/background-5.jpg',
    occupation: 'Designer',
    location: 'Seattle, WA',
    description: 'Passionate Designer. Recently focusing on developing mobile hybrid apps and web development.',
    address: '27 King\'s College Cir, Toronto, ON M5S, Canada',
    phone: '555 555 555',
    email: 'cosima@niehaus.com',
    whatsapp: '555 555 555',
  };

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileFivePage');
  }

}
