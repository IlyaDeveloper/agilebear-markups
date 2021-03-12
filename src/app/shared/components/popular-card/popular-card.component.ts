import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'agl-popular-card',
  templateUrl: './popular-card.component.html',
  styleUrls: ['./popular-card.component.scss']
})
export class PopularCardComponent implements OnInit {

  @Input() caption: string;
  @Input() description: string;
  @Input() logo: string;
  @Input() image: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
