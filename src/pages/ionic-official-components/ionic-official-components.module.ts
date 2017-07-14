import { CardListPageModule } from './card/card.module';
import { ButtonsListPageModule } from './button/button.module';
import { AlertsPageModule } from './alert/alert.module';
import { IonicOfficialComponentsPage } from './ionic-official-components';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    IonicOfficialComponentsPage,
  ],
  imports: [
    IonicPageModule.forChild(IonicOfficialComponentsPage),
    AlertsPageModule,
    ButtonsListPageModule,
    CardListPageModule
  ],
  exports: [
    IonicOfficialComponentsPage
  ]
})

export class IonicOfficialComponentsPageModule { }
