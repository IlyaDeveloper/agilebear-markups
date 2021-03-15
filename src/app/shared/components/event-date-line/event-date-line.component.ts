import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'agl-event-date-line',
  templateUrl: './event-date-line.component.html',
  styleUrls: ['./event-date-line.component.scss']
})
export class EventDateLineComponent implements OnInit {

  @Input() days: any = [];
  @Input() month: any = [];
  @Input() year: any = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
