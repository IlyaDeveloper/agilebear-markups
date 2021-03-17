import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'agl-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.scss']
})
export class ValidationMessagesComponent implements OnInit {
  @Input() fieldName: string;
  @Input() prefix: string;
  @Input() errors: any[] = [];
  @Input() type: string;
  @Input() errorsMsg: string;

  constructor() { }

  ngOnInit(): void {
  }
}
