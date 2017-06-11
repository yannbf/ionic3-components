import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasonryCardsPage } from './masonry-cards';

@NgModule({
  declarations: [
    MasonryCardsPage,
  ],
  imports: [
    IonicPageModule.forChild(MasonryCardsPage),
  ],
  exports: [
    MasonryCardsPage
  ]
})
export class MasonryCardsPageModule {}
