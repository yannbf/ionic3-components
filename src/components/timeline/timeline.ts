import { Component } from '@angular/core';

/**
 * Generated class for the TimelineComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html'
})
export class TimelineComponent {

  text: string;

  constructor() {
    console.log('Hello TimelineComponent Component');
    this.text = 'Hello World';
  }

}
