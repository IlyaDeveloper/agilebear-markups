import {Component, OnInit} from '@angular/core';

const SERVICES = [
  {
    name: 'Certified ScrumMaster Training',
    link: '/services/program',
    icon: 'csm'
  },
  {
    name: 'Certified Product Owner Training',
    link: '/services/program',
    icon: 'cspo'
  },
  {
    name: 'The Cultural Change',
    link: '/services/program',
    icon: 'tcc'
  },
  {
    name: 'Advanced Certified ScrumMaster Training',
    link: '/services/program',
    icon: 'a-csm'
  },
  {
    name: 'User Story Workshops',
    link: '/services/program',
    icon: 'usw'
  },
  {
    name: 'Agile Coaching Sessions',
    link: '/services/program',
    icon: 'acs'
  },
  {
    name: 'Lean Workshops',
    link: '/services/program',
    icon: 'lw'
  },
  {
    name: 'Scrum Overview',
    link: '/services/program',
    icon: 'so'
  },
  {
    name: 'Testing On Agile Projects: A Roadmap For Success',
    link: '/services/program',
    icon: 'toap'
  },
  {
    name: 'Certified Scrum Developer Training',
    link: '/services/program',
    icon: 'csd'
  },
  {
    name: 'Enterprise Organisational Change For Coaches',
    link: '/srvservicesices/program',
    icon: 'eocfc'
  },
  {
    name: 'Scrum Dragon',
    link: '/services/program',
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
