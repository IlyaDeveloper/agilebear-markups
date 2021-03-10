import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleMenu: boolean =false

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(): void{
    this.toggleMenu =!this.toggleMenu;
  }

}
