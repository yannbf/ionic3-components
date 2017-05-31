import { BarcodeScannerPage } from './barcode-scanner';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        BarcodeScannerPage,
    ],
    imports: [
        IonicPageModule.forChild(BarcodeScannerPage),
    ],
    exports: [
        BarcodeScannerPage
    ]
})

export class BarcodeScannerPageModule { };
