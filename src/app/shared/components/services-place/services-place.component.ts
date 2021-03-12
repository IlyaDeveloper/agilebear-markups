import {Component, Input} from '@angular/core';

@Component({
  selector: 'agl-services-place',
  templateUrl: './services-place.component.html',
  styleUrls: ['./services-place.component.scss']
})
export class ServicesPlaceComponent {

  @Input() type: boolean;

  constructor() {
  }
}
