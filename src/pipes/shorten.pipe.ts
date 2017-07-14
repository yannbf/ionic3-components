import { Pipe } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenStringPipe {
  // Shortens the string to a given length.
  // Input: {{'This is a very long string' | shorten:18}}
  // Output: This is a very lon...
  transform(value, maxWidth = 30, suffix = '...') {
    if (value && value.length > maxWidth) {
      value = value.substring(0, maxWidth) + suffix;
    }
    return value;
  }
}
