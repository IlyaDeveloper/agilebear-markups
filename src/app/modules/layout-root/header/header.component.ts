import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'agl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  html: HTMLElement = this.document.getElementsByTagName('html')[0];
  body: HTMLElement = this.document.getElementsByTagName('body')[0];
  isMenuOpen: boolean;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit(): void {
  }

  triggerMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    this.isMenuOpen ? this.body.classList.add('gm-scroll-hide') : this.body.classList.remove('gm-scroll-hide');
  }
}
