import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'agl-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss']
})
export class TopPanelComponent implements OnInit {

  @Input() type: string = 'home';

  @HostBinding('class.--second') get isTraining() {
    return (this.type === 'training');
  }

  @HostBinding('class.--third') get isServices() {
    return (this.type === 'services');
  }

  @HostBinding('class.--fourth') get isContact() {
    return (this.type === 'contact');
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
