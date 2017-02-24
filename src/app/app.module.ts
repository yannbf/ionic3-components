import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { SwingModule } from 'angular2-swing';

import { Pages, Directives, Pipes, Providers } from './app.imports';

@NgModule({
  declarations: [
    // App Core
    MyApp,

    // Pages
    Pages,

    // directives
    Directives,

    // pipes
    Pipes
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    SwingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Pages
  ],
  providers: [Providers, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
