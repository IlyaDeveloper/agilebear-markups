import {Component, OnInit} from '@angular/core';

const MOST_POPULARS = [
  {
    capt: 'Certified ScrumMaster Training',
    desc: 'Quae quo sunt excelsiores, eo dant indicia naturae. Causa autem fuit huc veniendi ut hinc.',
    logo: 'csm',
    img: 'most-popular-1.jpg'
  },
  {
    capt: 'Certified Product Owner Training',
    desc: 'Quae quo sunt excelsiores, eo dant indicia naturae. Causa autem fuit huc veniendi ut hinc.',
    logo: 'csm',
    img: 'most-popular-2.jpg'
  },
  {
    capt: 'Advanced Certified ScrumMaster Training',
    desc: 'Quae quo sunt excelsiores, eo dant indicia naturae. Causa autem fuit huc veniendi ut hinc.',
    logo: 'csm',
    img: 'most-popular-3.jpg'
  }
];

@Component({
  selector: 'agl-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss']
})
export class MostPopularComponent implements OnInit {

  list = MOST_POPULARS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
