import { WeatherService } from './weather.service';
import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  city: any;
  cityForecast: any;
  forecast = [];

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public weatherService: WeatherService) {

  }

  ionViewDidLoad() {
    console.log('Hello Weather Scroller Page');
  }

  loading: any;
  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Getting forecast...'
    });

    this.loading.present();
  }

  getCurrentForecast() {
    if (this.city) {
      this.presentLoading();
      this.weatherService.city(this.city)
        .map(data => data.json())
        .subscribe(
        data => {
          this.loading.dismiss();
          console.log(data);
          this.cityForecast = data;
        },
        (err) => {
          this.loading.dismiss();
          alert('error: ' + err)
        },
        () => console.log('forecast complete')
        )
    }
  }

  getWeekForecast() {
    if (this.city) {
      this.presentLoading();
      this.weatherService.forecast(this.city, 7)
        .map(data => data.json())
        .subscribe(
        data => {
          this.loading.dismiss();
          console.log(data);
          this.forecast = data.list;
        },
        (err) => {
          this.loading.dismiss();
          alert('error: ' + err)
        },
        () => console.log('forecast complete')
        )
    }
  }

  getLocalForecast() {
    this.presentLoading();
    this.weatherService.local()
      .map(data => data.json())
      .subscribe(
      data => {
        this.loading.dismiss();
        console.log(data);
        this.cityForecast = data;
      },
      (err) => {
        this.loading.dismiss();
        alert('error: ' + err)
      },
      () => console.log('forecast complete')
      )
  }

}

