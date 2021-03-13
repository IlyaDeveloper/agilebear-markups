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
  @Input() type: string;
  @Input() available: any;
  @Input() dates: string;
  @Input() category: string;
  @Input() status: boolean;


  constructor() {
  }

  ngOnInit(): void {
  }

}
