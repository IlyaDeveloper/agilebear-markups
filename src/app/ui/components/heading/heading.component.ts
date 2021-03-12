import {Component, Input} from '@angular/core';

@Component({
  selector: 'agl-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent {

  @Input() first: string;
  @Input() second: string;

  constructor() {
  }

}
