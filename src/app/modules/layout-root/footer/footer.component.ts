import {Component, HostBinding, Input, OnInit} from '@angular/core';

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

  @Input() footerType: string = 'a'; // 'a' || null; // footer-type = b  footer-type = c  footer-type = c2

  @HostBinding('class.--gray') get grayColor() {
    return (this.footerType === 'b');
  }

  @HostBinding('class.--second') get orangeColor() {
    return (this.footerType === 'c2');
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
