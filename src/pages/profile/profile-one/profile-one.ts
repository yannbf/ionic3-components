import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-one',
  templateUrl: 'profile-one.html'
})
export class ProfileOnePage {
  posts = [];
  imageUrl: string = 'assets/img/profile/profile-cover.jpg';

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 10; i++) {
      this.posts[i] = {
        text: 'Post text ' + i,
        created_at: (i + 1),
      };
    }
  }
}
