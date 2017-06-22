import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageCheckboxComponent } from './image-checkbox';

@NgModule({
  declarations: [
    ImageCheckboxComponent,
  ],
  imports: [
    IonicPageModule.forChild(ImageCheckboxComponent),
  ],
  exports: [
    ImageCheckboxComponent
  ]
})
export class ImageCheckboxComponentModule {}
