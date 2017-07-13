import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-autosizing-textarea',
  templateUrl: 'autosizing-textarea.html',
})
export class AutosizingTextarea {
  dummyText: string = `Hello I am autosizing textarea.
    I automatically adjusts to accommodate my content.
    I increase and decrease my size based on my content.
    Try by removing few lines or adding few new lines of text to see what I am able to do.`;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

}
