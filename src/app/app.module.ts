import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Modules, Pages, Directives, Pipes, Providers, Components } from './app.imports';

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
    Modules,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Pages
  ],
  providers: [Providers, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
