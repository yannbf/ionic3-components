import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile-one',
  templateUrl: 'profile-one.html'
})
export class ProfileOnePage {
  posts = [];
  imageUrl: string = 'assets/img/profile/profile-cover.jpg';

  constructor(public navCtrl: NavController) {
    for (var i = 0; i < 10; i++) {
      this.posts[i] = {
        text: 'Post text ' + i,
        created_at: (i + 1),
      };
    }
  }

}
