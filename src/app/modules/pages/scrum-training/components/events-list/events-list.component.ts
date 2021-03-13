import {Component, OnInit} from '@angular/core';
import {count} from 'rxjs/operators';

const TRAINING_EVENTS = [
  {
    name: 'Certified Product Owner',
    description: 'The industry-recognised Certified ScrumMaster Training is the perfect building block to educate and certify your people. Through exercises and peer discussions, attendees realise how much they rely on habits that lower productivity, quality, and return on investment. They also get to experience first-hand how a change to Scrum practices works and feels. Through a mixture of class room study, exercises, pair discussions and real-world trainer… experiences, an attendee will learn how a Scrum…',
    type: 'personal',
    available: 0,
    dates: [],
    category: '',
    image: 'most-popular-1.jpg'
  },
  {
    name: 'Advanced Certified ScrumMaster',
    description: 'The Product Owner is the one and only person responsible for managing the Product Backlog and ensuring the value of the work the Team performs. This person maintains the Product Backlog and ensures that it is visible to everyone. Everyone knows what items have the highest priority, so everyone knows what will be worked on. For the Product Owner to succeed, everyone in the organisation has to respect his or her decisions…',
    type: 'personal',
    available: 10,
    dates: [],
    category: '',
    image: 'most-popular-2.jpg'
  },
  {
    name: 'Advanced Certified Product Owner Training',
    description: 'The Product Owner is the one and only person responsible for managing the Product Backlog and ensuring the value of the work the Team performs. This person maintains the Product Backlog and ensures that it is visible to everyone. Everyone knows what items have the highest priority, so everyone knows what will be worked on. For the Product Owner to succeed, everyone in the organisation has to respect his or her decisions…',
    type: 'group',
    available: 3,
    dates: '',
    category: '',
    image: 'most-popular-3.jpg'
  },

  {
    name: '',
    description: '',
    type: 'personal',
    available: null,
    dates: '',
    category: '',
    status: '',
    image: ''
  },
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
