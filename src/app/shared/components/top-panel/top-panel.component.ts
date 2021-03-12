import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'agl-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss']
})
export class TopPanelComponent implements OnInit {

  @Input() type: string = 'home';

  constructor() {
  }

  ngOnInit(): void {
  }

}
