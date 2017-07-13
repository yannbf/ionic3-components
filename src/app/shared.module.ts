import { Components, Directives, Pipes } from './app.imports';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    Pipes,
    Directives,
    Components
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    Pipes,
    Components
  ]
})

export class SharedModule { }
