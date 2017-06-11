import { SlideMultirowPage } from './slide-multirow';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        SlideMultirowPage,
    ],
    imports: [
        IonicPageModule.forChild(SlideMultirowPage),
    ],
    exports: [
        SlideMultirowPage
    ]
})

export class SlideMultirowPageModule { };
