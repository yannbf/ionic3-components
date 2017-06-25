import { Injectable, ElementRef } from '@angular/core';

import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 GoogleMapsAnimation
} from '@ionic-native/google-maps';

import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class NativeGoogleMapsProvider {
  map: GoogleMap;

  constructor(
    public geolocation: Geolocation,
    private googleMaps: GoogleMaps) {
  }

  // Note: Call this method on ngAfterViewInit
  create(element: ElementRef) {
    const options = {
      backgroundColor: 'white',
      controls: {
        compass: true,
        myLocationButton: true,
        indoorPicker: true,
        zoom: true
      },
      gestures: {
        scroll: true,
        tilt: true,
        rotate: true,
        zoom: true
      }
    };

    this.map = this.googleMaps.create(element.nativeElement, options);
    return this.map.one(GoogleMapsEvent.MAP_READY);
  }

  centerToGeolocation(){
    return this.getGeolocationPosition().then((position) => {
      return this.centerToPosition(position);
    }, error => {
      return Promise.reject(error);
    });
  }

  getGeolocationPosition(){
    return new Promise((resolve, reject) => {
      this.geolocation.getCurrentPosition().then((position) => {
        let latLng: LatLng = new LatLng(position.coords.latitude, position.coords.longitude);
        resolve(latLng);
      }, error => {
        reject(error);
      });
    });
  }

  centerToPosition(latLng: any, zoom?: number, tilt?: number){
    let cameraPosition: CameraPosition = {
      target: latLng,
      zoom  : zoom || 18,
      tilt  : tilt || 10
    };
    return this.map.moveCamera(cameraPosition);
  }

  addMarker(position, title: string, infoClickCallback, animated = true){
     let markerOptions: MarkerOptions = {
       position: position,
       title: title,
       animation: animated ? GoogleMapsAnimation.BOUNCE : null,
       infoClick: infoClickCallback
     };

     return this.map.addMarker(markerOptions);
  }

  addMarkerToGeolocation(title: string, infoClickCallback, animated?: boolean) {
    this.getGeolocationPosition().then(position => {
      this.addMarker(position, title, infoClickCallback, animated);
    });
  }
}
