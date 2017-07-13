import { NativeGoogleMapsProvider } from '../../../providers/native-google-maps/native-google-maps';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-native-google-maps',
  templateUrl: 'native-google-maps.html',
})
export class NativeGoogleMapsPage {

  @ViewChild('map') mapElement: ElementRef;

  constructor(
    public navCtrl: NavController,
    public mapsCtrl: NativeGoogleMapsProvider) {
  }

  // Load map only after view is initialized
  ngAfterViewInit() {
    this.mapsCtrl.create(this.mapElement).then(() => this.mapsCtrl.centerToGeolocation());
  }

  addMarker() {
    this.mapsCtrl.addMarkerToGeolocation('Click me!', this.callbackSample);
  }

  callbackSample() {
    alert('The callback was called :D');
  }
}
