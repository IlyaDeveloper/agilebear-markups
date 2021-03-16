import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'agl-who-should-attend',
  templateUrl: './who-should-attend.component.html',
  styleUrls: ['./who-should-attend.component.scss']
})
export class WhoShouldAttendComponent implements OnInit {

  @Input() type: string = 'a';

  constructor() {
  }

  @HostBinding('class.--second') get isTypeSecond(): boolean {
    return (this.type === 'b');
  }

  ngOnInit(): void {
  }
}
