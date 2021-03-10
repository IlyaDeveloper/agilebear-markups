import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'agl-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  @Output() clickLinkEvent: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  closeMenu() {
    this.clickLinkEvent.emit();
  }

  goToHome() {
    this.closeMenu();
    this.router.navigate(['/'], {replaceUrl: true});
  }

}
