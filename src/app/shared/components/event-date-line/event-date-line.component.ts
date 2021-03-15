import {Component, Input} from '@angular/core';


@Component({
  selector: 'agl-event-date-line',
  templateUrl: './event-date-line.component.html',
  styleUrls: ['./event-date-line.component.scss']
})
export class EventDateLineComponent {

  @Input() days: any = [];
  @Input() month: string;
  @Input() year: number;

  constructor() {
  }
}
