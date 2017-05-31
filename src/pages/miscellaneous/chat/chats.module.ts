import { ChatsPage } from './chats';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        ChatsPage,
    ],
    imports: [
        IonicPageModule.forChild(ChatsPage),
    ],
    exports: [
        ChatsPage
    ]
})

export class ChatsPageModule { };
