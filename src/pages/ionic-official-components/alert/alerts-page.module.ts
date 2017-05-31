import { AlertsPagePage } from './alerts-page';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        AlertsPagePage,
    ],
    imports: [
        IonicPageModule.forChild(AlertsPagePage),
    ],
    exports: [
        AlertsPagePage
    ]
})

export class AlertsPagePageModule { };
