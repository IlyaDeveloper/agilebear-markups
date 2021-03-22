import {Component, Input, Inject, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'agl-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @ViewChild('inputRef') inputRef: ElementRef;
  @ViewChild('inputPlaceholderRef') inputPlaceholderRef: ElementRef;

  @Input() label: string;
  @Input() placeholder = 'Enter text';
  @Input() submitted: boolean;
  @Input() value: any;
  @Input() type = 'text';
  @Input() inputMode = 'text';
  @Input() autofocus: boolean;
  @Input() errorsMsg: string;
  @Input() importantPlace: boolean;
  isError: any = true;
  disabled: any = false;

  place;

  constructor() {
  }

  ngOnInit(): void {
    if (this.autofocus) {
      window.setTimeout(() => {
        this.inputRef.nativeElement.focus();
      }, 100);
    }
  }

  public onChange(event) {
  }


  public onFocus(event) {

    setTimeout(() => {
      this.inputRef.nativeElement.selectionStart = 1;
      this.inputRef.nativeElement.selectionEnd = 1;
      this.inputRef.nativeElement.focus();
    });
  }

  public onBlur(event) {
  }
}
