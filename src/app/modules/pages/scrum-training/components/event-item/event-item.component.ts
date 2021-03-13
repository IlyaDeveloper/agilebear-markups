import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'agl-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  @Input() name: string;
  @Input() description: string;
  @Input() image: string;
  @Input() date: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
