import {EventEmitter, Input, Output, Directive, AfterViewInit} from '@angular/core';
import {ControlValueAccessor, FormControl} from '@angular/forms';
import {forIn} from 'lodash';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Directive()
export class ElementBase implements ControlValueAccessor, AfterViewInit {
  @Output() triggerBlur: EventEmitter<any> = new EventEmitter();
  @Output() triggerFocus: EventEmitter<any> = new EventEmitter();
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  @Input() placeholder: string;
  @Input() submitted: boolean;
  @Input() showValidationAfterSubmit: boolean;
  @Input() label: string;
  @Input() value: number | string | boolean | any[];
  @Input() disabled: boolean;
  @Input() validationLabel: string;
  @Input() validationLabelPrefix: string;

  formControl: FormControl;
  isFocused: boolean;

  protected readonly unsubscribe$ = new Subject<void>();
  viewInitSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  viewInit$: Observable<boolean> = this.viewInitSubject$.asObservable();

  get isError() {
    return (
      this.formControl &&
      this.formControl.invalid &&
      (this.showValidationAfterSubmit
        ? (this.formControl.dirty || this.formControl.touched) && this.submitted
        : this.formControl.dirty || this.formControl.touched || this.submitted)
    );
  }

  get error() {
    const error: any = {};

    if (!this.formControl) {
      return error;
    }

    forIn(this.formControl.errors, (value, key) => {
      forIn(value, (val, k) => {
        error[k] = val;
      });

      error.key = key;
    });

    return error;
  }

  ngAfterViewInit(): void {
    this.viewInitSubject$.next(true);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public writeValue(value: number | string | boolean | any[]) {
    this.value = value;
    this.propagateChange(value);
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  public registerOnTouched() {
  }

  public propagateChange(_: any) {
  }

  public validate(formControl: FormControl) {
    this.formControl = formControl;
  }

  public onFocus(event) {
    this.isFocused = true;
    this.triggerFocus.emit(event);
  }

  public onBlur(event) {
    this.isFocused = false;
    this.triggerBlur.emit(event);
  }
}
