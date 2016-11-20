import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-blog-post',
  templateUrl: 'blog-post.html'
})
export class BlogPostPage {

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello BlogPost Page');
  }

}
