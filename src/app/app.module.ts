import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SwingModule } from 'angular2-swing';

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
