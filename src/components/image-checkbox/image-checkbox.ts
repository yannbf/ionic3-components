import { Component, Input, Output, forwardRef, EventEmitter} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'image-checkbox',
  templateUrl: 'image-checkbox.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageCheckboxComponent),
      multi: true
    }
  ]
})
export class ImageCheckboxComponent implements ControlValueAccessor {

  @Input('items') items;
  @Input() disabled:boolean = false;
  @Input('options') options;
  @Output() onSelected;
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  defaultColor = '#FF3251';
  borderColor = this.defaultColor;
  textColor = this.defaultColor;
  checkIcon = 'ios-checkmark-circle';
  animated;

  constructor() { }

  value: boolean = false;

  onChange = (_) => {
    console.log('oi');
  };
  onTouched = () => {};

  writeValue(value: any) {   //just fire once to get the inital value
    if (value !== undefined) {
    }
    this.propagateChange(value);
  }


  ngAfterViewInit() {
    if(!this.items) {
      console.warn('ImageCheckbox warn: no items were added.');
    }

    if(this.options){
      this.borderColor = this.options.borderColor || this.defaultColor;
      this.textColor   = this.options.textColor   || this.defaultColor;
      this.checkIcon   = this.options.checkIcon   || this.checkIcon;
      this.animated    = this.options.animated !== false;;
    }
  }

  ngOnChanges(changes) {
    console.log('change', changes);
    if (changes && changes.disabled) {
      // this.setDisabled(changes.disabled.currentValue);
    }
  }

  propagateChange = (_: any) => { };

  registerOnChange(fn) {
      this.propagateChange = fn;
  }
  registerOnTouched() { }

  select(item) {
    this.items.map(_item => _item.selected = _item === item);
    this.propagateChange(item.value);
    // this.onSelected();
  }
}
