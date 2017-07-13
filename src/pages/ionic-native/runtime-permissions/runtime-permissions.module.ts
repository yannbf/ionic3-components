import { RuntimePermissionsPage } from './runtime-permissions';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    RuntimePermissionsPage,
  ],
  imports: [
    IonicPageModule.forChild(RuntimePermissionsPage),
  ],
  exports: [
    RuntimePermissionsPage
  ]
})

export class RuntimePermissionsPageModule { }
