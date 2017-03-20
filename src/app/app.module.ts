import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SwingModule } from 'angular2-swing';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { Pages, Directives, Pipes, Providers, Components } from './app.imports';

@NgModule({
  declarations: [
    // App Core
    MyApp,
    Pages,
    Components,
    Directives,
    Pipes
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    SwingModule,
    RoundProgressModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Pages
  ],
  providers: [Providers, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
