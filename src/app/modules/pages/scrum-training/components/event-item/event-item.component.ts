import {Component, Input} from '@angular/core';

@Component({
  selector: 'agl-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent {

  @Input() name: string;
  @Input() advanced: boolean;
  @Input() description: string;
  @Input() image: string;
  @Input() type: string;
  @Input() available: any;
  @Input() dateDays: any;
  @Input() dateMouth: any;
  @Input() dateYear: any;
  @Input() category: string;
  @Input() status: boolean;
  @Input() logo: string;

  constructor() {
  }

  get isOrange(): boolean {
    return (this.logo === 'cspo');
  }

}
