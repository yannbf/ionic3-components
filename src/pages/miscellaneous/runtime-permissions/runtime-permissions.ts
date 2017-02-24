import { Component } from '@angular/core';
import { Diagnostic } from 'ionic-native';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-runtime-permissions',
  templateUrl: 'runtime-permissions.html'
})
export class RuntimePermissionsPage {

  // You can add many other permissions
  PERMISSION = {
    WRITE_EXTERNAL: Diagnostic.permission.WRITE_EXTERNAL_STORAGE,
    READ_EXTERNAL: Diagnostic.permission.READ_EXTERNAL_STORAGE,
    CAMERA: Diagnostic.permission.CAMERA,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  // You can use this kind of method, which is passing a permission value..
  requestPermission(permission) {
    Diagnostic.requestRuntimePermission(permission).then((status) => {
      if (status == Diagnostic.permissionStatus.GRANTED) {
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
    Diagnostic.isCameraAuthorized().then((authorized) => {
      if (authorized) {
        alert('camera is already authorized!');
      } else {
        Diagnostic.requestCameraAuthorization().then((status) => {
          if (status == Diagnostic.permissionStatus.GRANTED) {
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
    var permissions = Object.keys(this.PERMISSION).map(k => this.PERMISSION[k]);
    Diagnostic.requestRuntimePermissions(permissions).then((status) => {
      alert(JSON.stringify(status));
    }, error => {
      console.error('permission error:', error);
    });
  }
}
