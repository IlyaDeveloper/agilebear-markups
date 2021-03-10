import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'agl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output() clickButton = new EventEmitter();

  @Input() typeButton = 'submit';
  @Input() disabled = false;

  constructor() {
  }

  onClick(event): void {
    this.clickButton.emit(event);
  }
}
