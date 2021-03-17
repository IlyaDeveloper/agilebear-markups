import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'agl-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  @ViewChild('inputRef') inputRef: ElementRef;

  @Input() label: string;
  @Input() placeholder = 'Enter text';
  @Input() submitted: boolean;
  @Input() value: any;
  @Input() type = 'text';
  @Input() inputMode = 'text';
  @Input() autofocus: boolean;
  @Input() errorsMsg: string;

  isError: any = false;
  disabled: any = false;


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
