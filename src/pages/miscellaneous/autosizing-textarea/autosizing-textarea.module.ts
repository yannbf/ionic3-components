import { AutosizingTextareaPage } from './autosizing-textarea';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        AutosizingTextareaPage,
    ],
    imports: [
        IonicPageModule.forChild(AutosizingTextareaPage),
    ],
    exports: [
        AutosizingTextareaPage
    ]
})

export class AutosizingTextareaPageModule { };
