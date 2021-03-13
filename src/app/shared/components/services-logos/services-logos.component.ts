import {Component, Input, OnInit} from '@angular/core';

const SERVICES_LOGOS = [
  {
    name: 'a-csm',
    img: 'a_csm.png',
    imgS: 'a_csm_gray.png',
    caption: 'A CSM',
    text: 'Some test'
  },
  {
    name: 'acs',
    img: 'acs.png',
    imgS: 'acs_grey.png',
    caption: 'ACS',
    text: 'Some test'
  },
  {
    name: 'csd',
    img: 'csd.png',
    imgS: 'csd_grey.png',
    caption: 'CSD',
    text: 'Some test'
  },
  {
    name: 'csm',
    img: 'csm.png',
    imgS: 'csm_grey.png',
    caption: 'CSM',
    text: 'Some test'
  },
  {
    name: 'csp',
    img: 'csp.png',
    imgS: 'csp_grey.png',
    caption: 'CSP',
    text: 'Some test'
  },
  {
    name: 'cspo',
    img: 'cspo.png',
    imgS: 'cspo_grey.png',
    caption: 'CSPO',
    text: 'Some test'
  },
  {
    name: 'cst',
    img: 'cst.png',
    imgS: 'cst_gray.png',
    caption: 'CST',
    text: 'Some test'
  },
  {
    name: 'eocfc',
    img: 'eocfc.png',
    imgS: 'eocfc_grey.png',
    caption: 'EOCFC',
    text: 'Some test'
  },
  {
    name: 'lw',
    img: 'lw.png',
    imgS: 'lw_grey.png',
    caption: 'LW',
    text: 'Some test'
  },
  {
    name: 'rep',
    img: 'rep.png',
    imgS: 'rep_grey.png',
    caption: 'REP',
    text: 'Some test'
  },
  {
    name: 'sd',
    img: 'sd.png',
    imgS: 'sd_grey.png',
    caption: 'SD',
    text: 'Some test'
  },
  {
    name: 'so',
    img: 'so.png',
    imgS: 'so_grey.png',
    caption: 'SO',
    text: 'Some test'
  },
  {
    name: 'tcc',
    img: 'tcc.png',
    imgS: 'tcc_grey.png',
    caption: 'TCC',
    text: 'Some test'
  },
  {
    name: 'toap',
    img: 'toap.png',
    imgS: 'toap_grey.png',
    caption: 'TOAP',
    text: 'Some test'
  },
  {
    name: 'usw',
    img: 'usw.png',
    imgS: 'usw_grey.png',
    caption: 'USW',
    text: 'Some test'
  },

  /*  {
      name: '',
      img: '',
      imgS: '',
      caption: '',
      text: 'Some test'
    },*/
];

@Component({
  selector: 'agl-services-logos',
  templateUrl: './services-logos.component.html',
  styleUrls: ['./services-logos.component.scss']
})
export class ServicesLogosComponent implements OnInit {

  @Input() usedLogo: any = [];
  @Input() isGray: boolean;
  @Input() popoverTrigger: boolean = false;

  list: any = SERVICES_LOGOS;

  constructor() {

  }

  ngOnInit(): void {
    this.list = SERVICES_LOGOS.filter((item) => {
      return this.usedLogo.filter((item2) => {
        return item2 === item.name;
      }).length !== 0;
    });
  }
}
