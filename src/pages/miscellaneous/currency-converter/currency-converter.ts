import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import 'rxjs/Rx';

@Component({
  selector: 'page-currency-converter',
  templateUrl: 'currency-converter.html'
})
export class CurrencyConverterPage {
  baseUrl: string = 'http://download.finance.yahoo.com/d/quotes.csv?s={1}{2}=X&f=nl1d1t1';
  baseRate = 1;
  fromCurrency: string = 'USD';
  toCurrency: string = 'BRL';

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public http: Http, public alertCtrl: AlertController) { }

  currencies = ['USD', 'BRL', 'EUR'];

  ionViewDidLoad() {
    console.log('Hello Currency Page');
  }

  loading: any;
  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Getting rates...'
    });

    this.loading.present();
  }

  getRate() {
    if (this.fromCurrency && this.toCurrency) {
      let url = 'https://crossorigin.me/' + this.baseUrl.replace('{1}', this.fromCurrency)
        .replace('{2}', this.toCurrency);

      this.presentLoading();
      this.http.get(url)
        .map(data => data.text().split(',')[1])
        .subscribe(result => {
          this.loading.dismiss();
          this.baseRate = parseFloat(parseFloat(result).toFixed(2));
        }, error => {
          this.loading.dismiss();
          alert("Error" + error);
        });
    } else {
      alert('Select the currencies first.');
    }
  }
}

