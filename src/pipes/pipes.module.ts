import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';
import { MomentPipe } from './moment.pipe';
import { OrderByPipe } from './orderby.pipe';
import { ShortenStringPipe } from './shorten.pipe';
import { TemperaturePipe } from './temperature.pipe';

export const pipes = [
  CapitalizePipe,
  MomentPipe,
  OrderByPipe,
  ShortenStringPipe,
  TemperaturePipe,
];

@NgModule({
  declarations:[pipes],
  exports: [pipes]
})

export class PipesModule { }
