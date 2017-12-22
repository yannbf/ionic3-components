import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LIST_DATA } from './list-data';

@IonicPage()
@Component({
  selector: 'page-reactive-list-label',
  templateUrl: 'reactive-list-label.html',
})
export class ReactiveListLabelPage {

  public dataList: IDataList = LIST_DATA;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private initDataList() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReactiveListLabelPage');
  }

}
