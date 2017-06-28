import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteItemsPage } from './delete-items';

@NgModule({
  declarations: [
    DeleteItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteItemsPage),
  ],
  exports: [
    DeleteItemsPage
  ]
})
export class DeleteItemsPageModule {}
