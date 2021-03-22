import {Component, Input, OnInit, forwardRef} from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import {ElementBase} from '@ui/components/element-base';

@Component({
  selector: 'agl-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent  extends ElementBase  {
  @Input() typeItem = 'checkbox';
  @Input() fieldChecked = false;
  @Input() checked = false;

  constructor() {
    super();
  }

  public onChange(event) {
    const checked = event.target.checked;

    let value = null;

    if (checked) {
      value = this.value;
    }

    this.writeValue(value);
    this.valueChange.emit(value);
  }

  public writeValue(value: number | string | boolean | any[]) {
    if (this.typeItem === 'boolean') {
      this.checked = !!value;
    }

    this.value = value;
    this.propagateChange(value);
  }

  onClick(event) {
    if (this.checked && this.typeItem === 'radio') {
      event.preventDefault();
    }
  }

  public check() {
    this.checked = true;
  }

  public unCheck() {
    this.checked = false;
  }
}
