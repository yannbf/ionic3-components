import { WeatherPage } from './weather';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        WeatherPage,
    ],
    imports: [
        IonicPageModule.forChild(WeatherPage),
    ],
    exports: [
        WeatherPage
    ]
})

export class WeatherPageModule { };
