import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'temperature'
})
@Injectable()
export class TemperaturePipe {

  transform(value: string, args: any) {
    const c = Math.round(parseInt(value, 10) - 273.15);
    const f = Math.round(parseInt(value, 10) * 9 / 5 - 459.67);
    return args === 'c' ? `${c} °C` : `${f} °F`;
  }
}
