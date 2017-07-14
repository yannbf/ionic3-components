import { SlidePhotoGalleryPage } from './slide-photo-gallery';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SlidePhotoGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(SlidePhotoGalleryPage),
  ],
  exports: [
    SlidePhotoGalleryPage
  ]
})

export class SlidePhotoGalleryPageModule { }
