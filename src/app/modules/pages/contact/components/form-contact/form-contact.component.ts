import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'agl-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  selectedWouldData: number;
  selectedCoursesData: number;

  whatWouldData: any = [
    {id: 1, name: 'Public Courses'},
    {id: 2, name: 'Cancellations'},
  ];

  coursesData: any = [
    'first', 'first',
    'first', 'first'
  ];


  isSubmitted: boolean;
  form: FormGroup;
  values: any;

  constructor(
    protected fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobNumber: [null, Validators.required],
      jobName: [null],
      companyName: [null],
      whatWouldSelect: [null, Validators.required],
      iAgree: [null, Validators.required],
    });
  }

  onWouldDataChanged(value): void {
    this.selectedCoursesData = value.id;
  }

  onSubmit(event): void {
    if (this.form.invalid) {
      this.isSubmitted = true;
      return;
    }

    this.isSubmitted = false;
    console.warn(this.form.value);
  }
}
