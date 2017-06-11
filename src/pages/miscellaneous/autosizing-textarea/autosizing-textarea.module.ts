import { AutosizingTextarea } from './autosizing-textarea';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        AutosizingTextarea,
    ],
    imports: [
        IonicPageModule.forChild(AutosizingTextarea),
    ],
    exports: [
        AutosizingTextarea
    ]
})

export class AutosizingTextareaPageModule { };
