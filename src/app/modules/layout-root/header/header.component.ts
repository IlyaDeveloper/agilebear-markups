import {Component, Inject, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';

/*
            Certified ScrumMaster Training
            Certified Product Owner Training
            The Cultural Change
            Advanced Certified ScrumMaster Training
            User Story Workshops
            Agile Coaching Sessions
            Lean Workshops
            Scrum Overview
            Scrum Dragon
*/

const SERVICES_LINKS = [
  {
    name: 'Certified ScrumMaster Training',
    link: '/services/csm',
    icon: 'csm'
  },
  {
    name: 'Certified Product Owner Training',
    link: '/services/cspo',
    icon: 'cspo'
  },
  {
    name: 'The Cultural Change',
    link: '/services/tcc',
    icon: 'tcc'
  },
  {
    name: 'Advanced Certified ScrumMaster Training',
    link: '/services/acs',
    icon: ''
  },
  {
    name: 'User Story Workshops',
    link: '/services/usw',
    icon: 'usw'
  },
  {
    name: 'Agile Coaching Sessions',
    link: '/services/acs',
    icon: 'acs'
  },
  {
    name: 'Lean Workshops',
    link: '/services/lw',
    icon: 'lw'
  },
  {
    name: 'Scrum Overview',
    link: '/services/so',
    icon: 'so'
  },
  {
    name: 'Scrum Dragon',
    link: '/services/sd',
    icon: 'sd'
  },
];

const TRAINING_LINKS = [
  {
    name: 'Certified ScrumMaster Training',
    link: '/events:1',
    date: '2 - 4 March 2021',
    icon: 'csm'
  },
  {
    name: 'Advanced Certified ScrumMaster Training',
    link: '/events:2',
    date: '27 - 29 April 2021',
    icon: 'acs'
  },
  {
    name: 'Certified Product Owner Training',
    link: '/events:3',
    date: '15 - 17 June 2021',
    icon: 'cspo'
  },
];

@Component({
  selector: 'agl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  html: HTMLElement = this.document.getElementsByTagName('html')[0];
  body: HTMLElement = this.document.getElementsByTagName('body')[0];
  isMenuOpen: boolean;

  dwServiceList = SERVICES_LINKS;
  dwTrainingList = TRAINING_LINKS;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  ngOnInit(): void {
  }

  triggerMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    this.isMenuOpen ? this.body.classList.add('gm-scroll-hide') : this.body.classList.remove('gm-scroll-hide');
  }
}
