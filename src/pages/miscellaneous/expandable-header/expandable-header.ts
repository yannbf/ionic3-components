import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-expandable-header',
  templateUrl: 'expandable-header.html'
})
export class ExpandableHeaderPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

}
