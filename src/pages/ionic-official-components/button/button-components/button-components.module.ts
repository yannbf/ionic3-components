import { ButtonComponentsPage } from './button-components';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        ButtonComponentsPage,
    ],
    imports: [
        IonicPageModule.forChild(ButtonComponentsPage),
    ],
    exports: [
        ButtonComponentsPage
    ]
})

export class ButtonComponentsPageModule { };
