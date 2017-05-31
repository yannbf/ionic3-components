import { MiscellaneousPage } from './miscellaneous';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        MiscellaneousPage,
    ],
    imports: [
        IonicPageModule.forChild(MiscellaneousPage),
    ],
    exports: [
        MiscellaneousPage
    ]
})

export class MiscellaneousPageModule { };
