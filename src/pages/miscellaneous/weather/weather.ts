import { WeatherService } from './weather.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  city: any;
  cityForecast: any;
  forecast = [];

  constructor(public navCtrl: NavController, public weatherService: WeatherService) {

  }

  ionViewDidLoad() {
    console.log('Hello Weather Scroller Page');
  }

  getCurrentForecast() {
    if (this.city) {
      this.weatherService.city(this.city)
        .map(data => data.json())
        .subscribe(
        data => {
          console.log(data);
          this.cityForecast = data;
        },
        err => console.log('err: ' + err),
        () => console.log('forecast complete')
        )
    }
  }

  getWeekForecast() {
    if (this.city) {
      this.weatherService.forecast(this.city, 7)
        .map(data => data.json())
        .subscribe(
        data => {
          console.log(data);
          this.forecast = data.list;
        },
        err => console.log('err: ' + err),
        () => console.log('forecast complete')
        )
    }
  }

  getLocalForecast() {
    this.weatherService.local()
      .map(data => data.json())
      .subscribe(
      data => {
        console.log(data);
        this.cityForecast = data;
      },
      err => console.log('err: ' + err),
      () => console.log('forecast complete')
      )
  }

}

