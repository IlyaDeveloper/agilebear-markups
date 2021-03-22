import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'agl-layout-root',
  templateUrl: './layout-root.component.html',
  styleUrls: ['./layout-root.component.scss']
})
export class LayoutRootComponent implements OnInit {

  constructor(private router: Router) {
  }

  get isFooterType(): string {
    if (this.router.url.includes('contact')) {
      return 'b';
    } else if (this.router.url.includes('scrum-training')) {
      return 'c';
    } else if (this.router.url.includes('training')) {
      return 'c2';
    }
    return 'a';
  }

  ngOnInit(): void {
  }
}
