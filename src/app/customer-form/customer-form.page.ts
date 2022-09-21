import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './customer-form.page.html',
  styleUrls: ['./customer-form.page.scss'],
})
export class CustomerFormPage implements OnInit {
  customerData: any;
  fullName: string;
  phone: string;
  email: string;
  prefContact: string;
  jobDesc: string;

  constructor(/* public fb: FormBuilder,*/ private http: HttpClient) {}
  ngOnInit() {
    this.customerData = new FormGroup({
      fullName: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      prefContact: new FormControl(),
      jobDesc: new FormControl(),
    });
  }
  onSubmit() {
    this.http
      .post('http://idle-back-beta1.web.app/ticket', this.customerData.value)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }
}
