import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoundProgressComponent } from 'angular-svg-round-progressbar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild("progress") progressbar: RoundProgressComponent;
  drawerOptions: any;
  currentValue: any = 15;
  constructor(public navCtrl: NavController) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
  }

  ionViewDidLoad() {
    setInterval(() => {
      this.currentValue++;
    }, 500);
  }
}
