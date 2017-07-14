import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy', pure: false })
export class OrderByPipe implements PipeTransform {
  value: string[] = [];

  static orderByComparator(a: any, b: any): number {

    if (a === null || typeof a === 'undefined') { a = 0; }
    if (b === null || typeof b === 'undefined') { b = 0; }

    if (
            (isNaN(parseFloat(a)) ||
                !isFinite(a)) ||
            (isNaN(parseFloat(b)) || !isFinite(b))
        ) {
            // Isn"t a number so lowercase the string to properly compare
      a = a.toString();
      b = b.toString();
      if (a.toLowerCase() < b.toLowerCase()) { return -1; }
      if (a.toLowerCase() > b.toLowerCase()) { return 1; }
    } else {
            // Parse strings as numbers to compare properly
      if (parseFloat(a) < parseFloat(b)) { return -1; }
      if (parseFloat(a) > parseFloat(b)) { return 1; }
    }

    return 0; // equal each other
  }

  public transform(input: any, config = '+'): any {
    if (!input) { return input; }

        // make a copy of the input"s reference
    this.value = [...input];
    const value = this.value;
    if (!Array.isArray(value)) { return value; }

    if (!Array.isArray(config) || (Array.isArray(config) && config.length === 1)) {
      const propertyToCheck: string = !Array.isArray(config) ? config : config[0];
      const desc = propertyToCheck.substr(0, 1) === '-';

            // Basic array
      if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
        return !desc ? value.sort() : value.sort().reverse();
      } else {
        const property: string = propertyToCheck.substr(0, 1) === '+' || propertyToCheck.substr(0, 1) === '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;

        return value.sort((a: any, b: any) => {
          let aValue = a[property];
          let bValue = b[property];

          const propertySplit = property.split('.');

          if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
            aValue = a;
            bValue = b;
            for (let j = 0; j < propertySplit.length; j++) {
              aValue = aValue[propertySplit[j]];
              bValue = bValue[propertySplit[j]];
            }
          }

          return !desc
                        ? OrderByPipe.orderByComparator(aValue, bValue)
                        : -OrderByPipe.orderByComparator(aValue, bValue);
        });
      }
    } else {
            // Loop over property of the array in order and sort
      return value.sort((a: any, b: any) => {
        for (let i = 0; i < config.length; i++) {
          const desc = config[i].substr(0, 1) === '-';
          const property = config[i].substr(0, 1) === '+' || config[i].substr(0, 1) === '-'
                        ? config[i].substr(1)
                        : config[i];

          let aValue = a[property];
          let bValue = b[property];

          const propertySplit = property.split('.');

          if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
            aValue = a;
            bValue = b;
            for (let j = 0; j < propertySplit.length; j++) {
              aValue = aValue[propertySplit[j]];
              bValue = bValue[propertySplit[j]];
            }
          }

          const comparison = !desc
                        ? OrderByPipe.orderByComparator(aValue, bValue)
                        : -OrderByPipe.orderByComparator(aValue, bValue);

          // Don't return 0 yet in case of needing to sort by next property
          if (comparison !== 0) { return comparison; }
        }

        return 0; // equal each other
      });
    }
  }
}
