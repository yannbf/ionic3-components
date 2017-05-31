import { SlideRtlPage } from './slide-rtl';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        SlideRtlPage,
    ],
    imports: [
        IonicPageModule.forChild(SlideRtlPage),
    ],
    exports: [
        SlideRtlPage
    ]
})

export class SlideRtlPageModule { };
