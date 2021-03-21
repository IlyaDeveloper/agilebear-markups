import {Component, OnInit} from '@angular/core';
import {count} from 'rxjs/operators';

const TRAINING_EVENTS = [
  {
    name: 'Certified Product Owner',
    advanced: false,
    description: 'The industry-recognised Certified ScrumMaster Training is the perfect building block to educate and certify your people. Through exercises and peer discussions, attendees realise how much they rely on habits that lower productivity, quality, and return on investment. They also get to experience first-hand how a change to Scrum practices works and feels. Through a mixture of class room study, exercises, pair discussions and real-world trainer… experiences, an attendee will learn how a Scrum…',
    type: 'personal',
    logo: 'csm',
    available: 0,
    dateDays: [1, 3, 5],
    dateMouth: 'March',
    dateYear: 2021,
    category: '',
    image: 'most-popular-1.jpg'
  },
  {
    name: 'Certified Product Owner',
    advanced: false,
    description: 'The industry-recognised Certified ScrumMaster Training is the perfect building block to educate and certify your people. They also get to experience first-hand how a change to Scrum practices works and feels. Through a mixture of class room study, exercises, pair discussions and real-world trainer… experiences, an attendee will learn how a Scrum…',
    type: 'personal',
    logo: 'cspo',
    available: 10,
    dateDays: [1, 3, 4],
    dateMouth: 'March',
    dateYear: 2021,
    category: '',
    image: 'most-popular-1.jpg'
  },
  {
    name: 'Certified ScrumMaster',
    advanced: true,
    description: 'The Product Owner is the one and only person responsible for managing the Product Backlog and ensuring the value of the work the Team performs. This person maintains the Product Backlog and ensures that it is visible to everyone. Everyone knows what items have the highest priority, so everyone knows what will be worked on. For the Product Owner to succeed, everyone in the organisation has to respect his or her decisions…',
    type: 'group',
    logo: 'a-csm',
    available: 100,
    dateDays: [7, 8, 9],
    dateMouth: 'April',
    dateYear: 2021,
    category: '',
    image: 'most-popular-2.jpg'
  },
  {
    name: 'Certified Product Owner Training',
    advanced: false,
    description: 'The Product Owner is the one and only person responsible for managing the Product Backlog and ensuring the value of the work the Team performs. This person maintains the Product Backlog and ensures that it is visible to everyone. Everyone knows what items have the highest priority, so everyone knows what will be worked on. For the Product Owner to succeed, everyone in the organisation has to respect his or her decisions…',
    type: 'group',
    logo: 'cspo',
    available: 3,
    dateDays: [10, 12, 14],
    dateMouth: 'May',
    dateYear: 2021,
    category: '',
    image: 'most-popular-3.jpg'
  },

  {
    name: 'Certified ScrumMaster',
    advanced: true,
    description: 'The Product Owner is the one and only person responsible for managing the Product Backlog and ensuring the value of the work the Team performs. This person maintains the Product Backlog and ensures that it is visible to everyone. Everyone knows what items have the highest priority, so everyone knows what will be worked on. For the Product Owner to succeed, everyone in the organisation has to respect his or her decisions…',
    type: 'personal',
    logo: 'csm',
    available: 22,
    dateDays: [4, 5, 6, 7],
    dateMouth: 'July',
    dateYear: 2021,
    category: '',
    image: 'most-popular-2.jpg'
  },
/*
  {
    name: '',
    advanced: false,
    description: '',
    type: 'personal',
    available: null,
    dateDays: [21, 23, 25],
    dateMouth: 'March',
    dateYear: 2021,
    category: '',
    status: '',
    image: ''
  },*/
];


@Component({
  selector: 'agl-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  list = TRAINING_EVENTS;

  constructor() {
  }

  ngOnInit(): void {
  }
}
