import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-item-ribbon',
  templateUrl: 'item-ribbon.html',
})
export class ItemRibbonPage {

  public thumbnails: { title: string, image: string, ribbonText: string, class: string }[] = [
    { title: 'Awesome Shoes - $9', image: 'assets/img/ribbon/shoes.jpg', ribbonText: 'sale', class: 'sale' },
    { title: 'Awesome Team', image: 'assets/img/ribbon/cruzeiro.jpg', ribbonText: 'awesome', class: 'cruzeiro' },
    { title: 'Bad team', image: 'assets/img/ribbon/atletico.jpg', ribbonText: 'bad', class: 'atletico' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
