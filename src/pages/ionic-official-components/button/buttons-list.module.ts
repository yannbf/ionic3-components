import { ButtonsListPage } from './buttons-list';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        ButtonsListPage,
    ],
    imports: [
        IonicPageModule.forChild(ButtonsListPage),
    ],
    exports: [
        ButtonsListPage
    ]
})

export class ButtonsListPageModule { };
