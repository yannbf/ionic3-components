import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListCardUiPage } from './list-card-ui';

@NgModule({
  declarations: [
    ListCardUiPage,
  ],
  imports: [
    IonicPageModule.forChild(ListCardUiPage),
  ],
})
export class ListCardUiPageModule {}
