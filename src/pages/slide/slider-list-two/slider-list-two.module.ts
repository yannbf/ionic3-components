import { SliderListTwoPage } from './slider-list-two';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        SliderListTwoPage,
    ],
    imports: [
        IonicPageModule.forChild(SliderListTwoPage),
    ],
    exports: [
        SliderListTwoPage
    ]
})

export class SliderListTwoPageModule { };
