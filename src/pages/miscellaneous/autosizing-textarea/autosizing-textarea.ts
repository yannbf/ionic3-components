import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-autosizing-textarea',
  templateUrl: 'autosizing-textarea.html',
})
export class AutosizingTextarea {
  dummyText: string = 'Hello I am autosizing textarea. I automatically adjusts to accommodate my content. I increases and decreases my size based on my content. Try by removing few lines or adding few new lines of text to see what I am able to do.';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

}
