import { CardListPage } from './card-list';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        CardListPage,
    ],
    imports: [
        IonicPageModule.forChild(CardListPage),
    ],
    exports: [
        CardListPage
    ]
})

export class CardListPageModule { };
