import {Component, Input, Inject, OnInit, ViewChild, forwardRef, ElementRef} from '@angular/core';
import {ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {DOCUMENT} from '@angular/common';
import {ElementBase} from '@ui/components/element-base';

@Component({
  selector: 'agl-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent extends ElementBase implements OnInit {

  @ViewChild('inputRef') inputRef: ElementRef;
  @ViewChild('validationMessages') validationMessages: ElementRef;

  @Input() label: string;
  @Input() placeholder = 'Enter text';
  @Input() submitted: boolean;
  @Input() value: any;
  @Input() type = 'text';
  @Input() inputMode = 'text';
  @Input() autofocus: boolean;
  @Input() errorsMsg: string;
  @Input() importantPlace: boolean;

  disabled: any = false;

  widthValidationMessages;

  constructor(@Inject(DOCUMENT) private document: Document) {
    super();
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
