import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'agl-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() typeItem = 'checkbox';
  @Input() fieldChecked = false;
  @Input() checked = false;

  constructor() {
  }

  public onChange(event) {
    const checked = event.target.checked;

    /*
        let value = null;

        if (checked) {
          value = this.value;
        }
    */

    // this.writeValue(value);
  }

  public writeValue(value: number | string | boolean | any[]) {
    if (this.typeItem === 'boolean') {
      this.checked = !!value;
    }

    // this.value = value;
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