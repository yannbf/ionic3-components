import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemRibbonPage } from './item-ribbon';

@NgModule({
  declarations: [
    ItemRibbonPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemRibbonPage),
  ],
})
export class ItemRibbonPageModule {}
