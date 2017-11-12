import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemRibbonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-ribbon',
  templateUrl: 'item-ribbon.html',
})
export class ItemRibbonPage {

  public thumbnails: {title: string, image: string, ribbonText: string, class: string}[] = [
    { title: 'Awesome Shoes - $9', image: 'assets/img/ribbon/shoes.jpg', ribbonText: 'sale', class: 'sale' },
    { title: 'Awesome Tean', image: 'assets/img/ribbon/cruzeiro.jpg', ribbonText: 'awesome', class: 'cruzeiro' },
    { title: 'Bad team', image: 'assets/img/ribbon/atletico.jpg', ribbonText: 'bad', class: 'atletico' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemRibbonPage');
  }

}
