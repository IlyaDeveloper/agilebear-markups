import {Component, OnInit} from '@angular/core';

const TRAINING_EVENTS = [
  {
    name: '',
    description: 'The industry-recognised Certified ScrumMaster Training is the perfect building block to educate and certify your people. Through exercises and peer discussions, attendees realise how much they rely on habits that lower productivity, quality, and return on investment. They also get to experience first-hand how a change to Scrum practices works and feels. Through a mixture of class room study, exercises, pair discussions and real-world trainer… experiences, an attendee will learn how a Scrum…',
    type: 'personal',
    category: '',
    status: '',
    image: ''
  },

  {
    name: '',
    description: '',
    type: 'personal',
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
