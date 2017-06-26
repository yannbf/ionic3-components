import { SharedModule } from './shared.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Modules, Providers } from './app.imports';

@NgModule({
  declarations: [
    // App Core
    MyApp,
  ],
  imports: [
    Modules,
    IonicModule.forRoot(MyApp),
    SharedModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [Providers, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
