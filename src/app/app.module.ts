import { MyApp } from './app.component';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SwingModule } from 'angular2-swing';

import { AppImports } from './app.imports';

@NgModule({
  declarations: [
    // App Core
    MyApp,

    // Pages
    AppImports.Pages,

    // directives    
    AppImports.Directives,

    // pipes
    AppImports.Pipes
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    SwingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AppImports.Pages
  ],
  providers: [AppImports.Providers]
})
export class AppModule { }
