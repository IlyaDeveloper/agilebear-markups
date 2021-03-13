import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'agl-layout-root',
  templateUrl: './layout-root.component.html',
  styleUrls: ['./layout-root.component.scss']
})
export class LayoutRootComponent implements OnInit {

  url: string;

  constructor(private router: Router) {
  }

  get isFooterType(): string {
    if (this.url.includes('contact')) {
      return 'b';
    } else if (this.url.includes('services')) {
      return 'c';
    } else if (this.url.includes('training')) {
      return 'c2';
    }
    return 'a';
  }

  ngOnInit(): void {
    this.url = this.router.url.split('?')[0];
  }
}
