import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'agl-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  selectedWouldData: number;
  selectedCoursesData: number;

  whatWouldData: any = [
    {id: 1, name: 'Public Courses'},
    {id: 2, name: 'Cancellations'},
  ];

  coursesData: any = [
    'first',  'first',
    'first',   'first'
  ];

  constructor() {
  }


  ngOnInit(): void {
  }

}
