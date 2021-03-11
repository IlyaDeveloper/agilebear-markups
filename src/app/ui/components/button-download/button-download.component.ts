import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'agl-button-download',
  templateUrl: './button-download.component.html',
  styleUrls: ['./button-download.component.scss']
})
export class ButtonDownloadComponent {
  @Output() clickButton = new EventEmitter();

  @Input() typeButton = 'submit';
  @Input() disabled = false;

  constructor() {
  }

  onClick(event): void {
    this.clickButton.emit(event);
  }
}
