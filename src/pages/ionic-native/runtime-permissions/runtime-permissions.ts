import { Component } from '@angular/core';
import { Diagnostic } from '@ionic-native/diagnostic';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-runtime-permissions',
  templateUrl: 'runtime-permissions.html'
})
export class RuntimePermissionsPage {

  // You can add many other permissions
  PERMISSION = {
    WRITE_EXTERNAL: this.diagnostic.permission.WRITE_EXTERNAL_STORAGE,
    READ_EXTERNAL: this.diagnostic.permission.READ_EXTERNAL_STORAGE,
    CAMERA: this.diagnostic.permission.CAMERA,
  };

  constructor(
    public navCtrl: NavController,
    public diagnostic: Diagnostic,
    public navParams: NavParams
  ) { }

  // You can use this kind of method, which is passing a permission value..
  requestPermission(permission) {
    this.diagnostic.requestRuntimePermission(permission).then((status) => {
      if (status === this.diagnostic.permissionStatus.GRANTED) {
        alert('Permission granted!');
      } else {
        alert('Permission not granted. STATUS: ' + status);
      }
    }, error => {
      console.error('permission error:', error);
    });
  }

  // ..Or opt for Diagnostic's specific methods, like requestCameraAuthorization.
  requestCameraPermission() {
    // Checks if permission is already granted. Otherwise, asks for it.
    this.diagnostic.isCameraAuthorized().then((authorized) => {
      if (authorized) {
        alert('camera is already authorized!');
      } else {
        this.diagnostic.requestCameraAuthorization().then((status) => {
          if (status === this.diagnostic.permissionStatus.GRANTED) {
            alert('Permission granted!');
          } else {
            alert('Permission not granted. STATUS: ' + status);
          }
        });
      }
    });
  }

  // There is also a method that takes an array of permissions to ask for them at once
  requestAllPermissions() {
    const permissions = Object.keys(this.PERMISSION).map(k => this.PERMISSION[k]);
    this.diagnostic.requestRuntimePermissions(permissions).then((status) => {
      alert(JSON.stringify(status));
    }, error => {
      console.error('permission error:', error);
    });
  }
}
