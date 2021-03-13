import {Component, OnInit} from '@angular/core';

const SERVICES = [
  {
    name: 'Certified ScrumMaster Training',
    link: '/service/csm',
    icon: 'csm'
  },
  {
    name: '',
    link: '/srvices/',
    icon: ''
  },
  {
    name: 'Certified Product Owner Training',
    link: '/srvices/cspo',
    icon: 'cspo'
  },
  {
    name: 'The Cultural Change',
    link: '/srvices/tcc',
    icon: 'tcc'
  },
  {
    name: 'Advanced Certified ScrumMaster Training',
    link: '/srvices/acsm',
    icon: 'a-csm'
  },
  {
    name: 'User Story Workshops',
    link: '/srvices/usw',
    icon: 'usw'
  },
  {
    name: 'Agile Coaching Sessions',
    link: '/srvices/acs',
    icon: 'acs'
  },
  {
    name: 'Lean Workshops',
    link: '/srvices/lw',
    icon: 'lw'
  },
  {
    name: 'Scrum Overview',
    link: '/srvices/so',
    icon: 'so'
  },
  {
    name: 'Certified Scrum Developer Training',
    link: '/srvices/csd',
    icon: 'csd'
  },
  {
    name: 'Enterprise Organisational Change For Coaches',
    link: '/srvices/eocfc',
    icon: 'eocfc'
  },
  {
    name: 'Scrum Dragon',
    link: '/srvices/sd',
    icon: 'sd'
  },
];

@Component({
  selector: 'agl-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {

  list = SERVICES;

  constructor() {
  }

  ngOnInit(): void {
  }

}
