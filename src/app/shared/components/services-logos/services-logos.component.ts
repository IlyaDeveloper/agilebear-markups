import {Component, OnInit} from '@angular/core';

const SERVICES_LOGOS = [
  {
    name: '',
    img: ''
  }
];

@Component({
  selector: 'agl-services-logos',
  templateUrl: './services-logos.component.html',
  styleUrls: ['./services-logos.component.scss']
})
export class ServicesLogosComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
