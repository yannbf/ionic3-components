import { CurrencyConverterPage } from './currency-converter';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        CurrencyConverterPage,
    ],
    imports: [
        IonicPageModule.forChild(CurrencyConverterPage),
    ],
    exports: [
        CurrencyConverterPage
    ]
})

export class CurrencyConverterPageModule { };
