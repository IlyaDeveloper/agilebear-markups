import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'agl-team-photo',
  templateUrl: './team-photo.component.html',
  styleUrls: ['./team-photo.component.scss']
})
export class TeamPhotoComponent implements OnInit {

  @Input() src: string;
  constructor() { }

  ngOnInit(): void {
  }

}
