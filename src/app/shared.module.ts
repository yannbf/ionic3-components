import { COMPONENTS, DIRECTIVES, PIPES } from './app.imports';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PIPES,
    DIRECTIVES,
    COMPONENTS
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    PIPES,
    COMPONENTS
  ]
})

export class SharedModule { }
