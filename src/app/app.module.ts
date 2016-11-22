import { MyApp } from './app.component';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
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
  providers: [Providers]
})
export class AppModule { }
