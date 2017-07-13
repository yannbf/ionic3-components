import { SlideFreeModePage } from './slide-free-mode';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SlideFreeModePage,
  ],
  imports: [
    IonicPageModule.forChild(SlideFreeModePage),
  ],
  exports: [
    SlideFreeModePage
  ]
})

export class SlideFreeModePageModule { }
