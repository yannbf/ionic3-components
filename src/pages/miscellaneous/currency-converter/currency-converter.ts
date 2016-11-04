import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import 'rxjs/Rx';

@Component({
  selector: 'page-currency-converter',
  templateUrl: 'currency-converter.html'
})
export class CurrencyConverterPage {
  baseUrl: string = 'http://download.finance.yahoo.com/d/quotes.csv?s={1}{2}=X&f=nl1d1t1';
  baseRate = 1;
  fromCurrency: any;
  toCurrency: any;
  constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController) { }

  ionViewDidLoad() {
    console.log('Hello ProfileTwo Page');
  }

  getRate() {
    let url = 'https://crossorigin.me/' + this.baseUrl.replace('{1}', this.fromCurrency)
      .replace('{2}', this.toCurrency);

    this.http.get(url)
      .map(data => data.text().split(',')[1])
      .subscribe(result => {
        this.baseRate = parseFloat(parseFloat(result).toFixed(2));
      });
  }

  doRadio(isFrom) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Dollar',
      value: 'USD',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Brazilian Real',
      value: 'BRL'
    });

    alert.addInput({
      type: 'radio',
      label: 'Euro',
      value: 'EUR'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        if (isFrom) {
          this.fromCurrency = data;
        } else {
          this.toCurrency = data;
        }
      }
    });

    alert.present();
  }
}

