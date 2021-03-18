import {Component, Input} from '@angular/core';

@Component({
  selector: 'agl-services-top-strip',
  templateUrl: './services-top-strip.component.html',
  styleUrls: ['./services-top-strip.component.scss']
})
export class ServicesTopStripComponent {

  @Input() img: string;
  @Input() days:string;

  get orangeColor() {
    return false;
  }


  constructor() {
  }

}
