import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'agl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  logos = [
    'csp',
    'cspo',
    'cst',
    'csm',
    'rep',
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
