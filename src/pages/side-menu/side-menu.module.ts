import { SideMenuPage } from './side-menu';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SideMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(SideMenuPage),
  ],
  exports: [
    SideMenuPage
  ]
})

export class SideMenuPageModule { }
