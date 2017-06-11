import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicNativePage } from './ionic-native';

@NgModule({
  declarations: [
    IonicNativePage,
  ],
  imports: [
    IonicPageModule.forChild(IonicNativePage),
  ],
  exports: [
    IonicNativePage
  ]
})
export class IonicNativePageModule {}
