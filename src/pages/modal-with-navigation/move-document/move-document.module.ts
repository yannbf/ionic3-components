import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoveDocumentPage } from './move-document';

@NgModule({
  declarations: [
    MoveDocumentPage,
  ],
  imports: [
    IonicPageModule.forChild(MoveDocumentPage),
  ],
  exports: [
    MoveDocumentPage
  ]
})
export class MoveDocumentPageModule {}
