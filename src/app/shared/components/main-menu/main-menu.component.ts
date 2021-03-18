import {Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'agl-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  @Output() clickLinkEvent: EventEmitter<any> = new EventEmitter();

  @Input() sunMenu1: any = [];
  @Input() sunMenu2: any = [];

  constructor(
    private router: Router,
  ) {
  }


  sub1: boolean = false;
  sub2: boolean = false;

  ngOnInit(): void {
  }

  closeMenu() {
    this.clickLinkEvent.emit();
    this.sub1 = false;
    this.sub2 = false;
  }

  openSub(val?: string) {
    if (val === 'services') {
      this.sub1 = !this.sub1;
    } else if (val === 'training') {
      this.sub2 = !this.sub2;
    }
  }

  goToHome() {
    this.closeMenu();
    this.router.navigate(['/'], {replaceUrl: true});
  }

}
