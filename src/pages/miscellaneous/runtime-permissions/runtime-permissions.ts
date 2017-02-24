import { Component } from '@angular/core';
import { Diagnostic } from 'ionic-native';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-runtime-permissions',
  templateUrl: 'runtime-permissions.html'
})
export class RuntimePermissionsPage {

  PERMISSION = {
    WRITE_EXTERNAL: Diagnostic.permission.WRITE_EXTERNAL_STORAGE,
    READ_EXTERNAL: Diagnostic.permission.READ_EXTERNAL_STORAGE,
    CAMERA: Diagnostic.permission.CAMERA,
    READ_CONTACTS: Diagnostic.permission.READ_CONTACTS,
    RECORD_AUDIO: Diagnostic.permission.RECORD_AUDIO,
    CALL_PHONE: Diagnostic.permission.CALL_PHONE,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  requestPermission(permission) {
    Diagnostic.requestRuntimePermission(permission).then(() => {
      console.log('permission granted');
    }, error => {
      console.error('permission error:', error);
    });
  }

  requestAllPermissions() {
    var permissions = Object.keys(this.PERMISSION).map(k => this.PERMISSION[k]);
    Diagnostic.requestRuntimePermissions(permissions).then(() => {
      console.log('permission granted');
    }, error => {
      console.error('permission error:', error);
    });
  }

  funca() {
    Diagnostic.isCameraAuthorized().then((authorized) => {
      if (authorized) {
      } else {
        Diagnostic.requestContactsAuthorization
        Diagnostic.requestContactsAuthorization().then((status) => {
          if (status == Diagnostic.permissionStatus.GRANTED) {

          } else {
            // Permissions not granted
          }
        });
      }
    });
  }

}
