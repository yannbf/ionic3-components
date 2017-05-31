import { FlashCardPage } from './flash-card';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        FlashCardPage,
    ],
    imports: [
        IonicPageModule.forChild(FlashCardPage),
    ],
    exports: [
        FlashCardPage
    ]
})

export class FlashCardPageModule { };
