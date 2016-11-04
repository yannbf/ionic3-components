import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-thumbnail-list',
  templateUrl: 'thumbnail-list.html'
})
export class ThumbnailListPage {
  posts = [];
  imageUrl: string = 'assets/img/profile/profile-cover.jpg';

  constructor(public navCtrl: NavController) {
    
  }

}
