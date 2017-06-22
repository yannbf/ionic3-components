import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'image-checkbox',
  templateUrl: 'image-checkbox.html'
})
export class ImageCheckboxComponent {

  @Input('options') options;
  @Output() onSelected;

  borderColor = '#FF0000';
  textColor = 'red';

  constructor() {
    if(!this.options) {
      console.log('ImageCheckbox warn: no items were added.');
    }
  }

  select(option) {
    this.options.map(opt => opt.selected = opt === option);
    // this.onSelected();
  }
}
