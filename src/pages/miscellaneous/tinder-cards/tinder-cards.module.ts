import { TinderCardsPage } from './tinder-cards';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        TinderCardsPage,
    ],
    imports: [
        IonicPageModule.forChild(TinderCardsPage),
    ],
    exports: [
        TinderCardsPage
    ]
})

export class TinderCardsPageModule { };
