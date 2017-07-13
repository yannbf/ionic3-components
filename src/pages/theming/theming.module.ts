import { ThemingPage } from './theming';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ThemingPage,
  ],
  imports: [
    IonicPageModule.forChild(ThemingPage),
  ],
  exports: [
    ThemingPage
  ]
})

export class ThemingPageModule { }
