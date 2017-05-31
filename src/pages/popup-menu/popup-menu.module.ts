import { PopupMenuPage } from './popup-menu';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        PopupMenuPage,
    ],
    imports: [
        IonicPageModule.forChild(PopupMenuPage),
    ],
    exports: [
        PopupMenuPage
    ]
})

export class PopupMenuPageModule { };
