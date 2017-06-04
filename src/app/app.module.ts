import {
    IonicOfficialComponentsPageModule
} from '../pages/ionic-official-components/ionic-official-components.module';
import { SideMenuPageModule } from '../pages/side-menu/side-menu.module';
import { ThemingPageModule } from '../pages/theming/theming.module';
import { PopupModalPageModule } from '../pages/popup-modal/popup-modal.module';
import { PopupMenuListPageModule } from '../pages/popup-menu/popup-menu.module';
import { MiscellaneousListPageModule } from '../pages/miscellaneous/miscellaneous.module';
import { ProfileListPageModule } from '../pages/profile/profile.module';
import { ListsPageModule } from '../pages/list/list.module';
import { LoginListPageModule } from '../pages/login/login.module';
import { BarcodeScannerPageModule } from '../pages/ionic-native/barcode-scanner/barcode-scanner.module';
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
    IonicModule.forRoot(MyApp),
    BarcodeScannerPageModule,
    LoginListPageModule,
    ListsPageModule,
    ProfileListPageModule,
    MiscellaneousListPageModule,
    PopupMenuListPageModule,
    PopupModalPageModule,
    ThemingPageModule,
    SideMenuPageModule,
    IonicOfficialComponentsPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Pages
  ],
  providers: [Providers, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
