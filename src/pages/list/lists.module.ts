import { ListsPage } from './lists';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        ListsPage,
    ],
    imports: [
        IonicPageModule.forChild(ListsPage),
    ],
    exports: [
        ListsPage
    ]
})

export class ListsPageModule { };
