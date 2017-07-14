import { SettingsListPage } from './settings';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SettingsListPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsListPage),
  ],
  exports: [
    SettingsListPage
  ]
})

export class SettingsListPageModule { }
