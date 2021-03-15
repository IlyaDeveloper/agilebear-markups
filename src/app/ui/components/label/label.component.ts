import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'agl-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {
  @Input() type: any = 0;

  label: any = 'LAST FEW PLACES';

  @HostBinding('class.--blue') get isNewly(): any {
    return (this.type === 0);
  }

  @HostBinding('class.--blue') get isLast(): any {
    return (this.type === 1);
  }

  @HostBinding('class.--orange') get isSold(): any {
    return (this.type === 2);
  }

  constructor() {
    if (this.type === 0) {
      this.label = 'LAST FEW PLACES';
    } else if (this.type === 1) {
      this.label = 'NEWLY ANNOUNCED';
    } else if (this.type === 2) {
      this.label = 'SOLD OUT';
    }
  }
}
