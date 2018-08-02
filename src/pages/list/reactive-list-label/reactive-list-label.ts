import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LIST_DATA, IDataList } from './list-data';

@IonicPage()
@Component({
  selector: 'page-reactive-list-label',
  templateUrl: 'reactive-list-label.html'
})
export class ReactiveListLabelPage {
  public dataList = LIST_DATA;
  public currentCategory: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private ngZone: NgZone
  ) {}

  public itemIsVisible($event, book: IDataList) {
    console.log(book, $event);
    book.visible = $event;
    this.setCategory();
  }

  private setCategory() {
    const obj = {};
    let qtdVisibleCategory = 0;
    let higherCategory = '';
    this.dataList
      .filter(bk => bk.visible)
      .forEach(
        bk => (obj[bk.category] = obj[bk.category] ? obj[bk.category] + 1 : 1)
      );
    for (const key in obj) {
      if (obj[key] > qtdVisibleCategory) {
        qtdVisibleCategory = obj[key];
        higherCategory = key;
      }
    }
    console.log(obj);
    this.ngZone.runOutsideAngular(() => {
      this.ngZone.run(() => {
        this.currentCategory = higherCategory;
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReactiveListLabelPage');
  }
}
