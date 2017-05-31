import { IonicOfficialComponentsPage } from './ionic-official-components';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        IonicOfficialComponentsPage,
    ],
    imports: [
        IonicPageModule.forChild(IonicOfficialComponentsPage),
    ],
    exports: [
        IonicOfficialComponentsPage
    ]
})

export class IonicOfficialComponentsPageModule { };
