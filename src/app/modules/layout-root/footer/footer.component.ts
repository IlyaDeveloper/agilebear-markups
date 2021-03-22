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

  @HostBinding('class.--gray') get grayColor(): boolean {
    return (this.footerType === 'b');
  }

  @HostBinding('class.--second') get orangeColor(): boolean {
    return (this.footerType === 'c2');
  }

/*
  @HostBinding('class.--third') get thirdText(): boolean {
    return (this.footerType === 'c');
  }
*/

  @HostBinding('class.--large-text') get largeText(): boolean {
    return (this.footerType === 'c2' || this.footerType === 'c');
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
