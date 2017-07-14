import { Pipe } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe {
    // Autocapitalizes the first letter of each word in a phrase.
    // Input: {{'john doe' | capitalize}}
    // Output: John Doe
  transform(value) {
    if (value) {
      const words = value.split(' ');

      value = words.map((word) => word.substring(0, 1).toUpperCase() + word.substring(1)).join(' ');
    }
    return value;
  }
}
