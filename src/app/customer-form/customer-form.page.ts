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
  form: FormGroup;
  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      fullName: [''],
      phone: [''],
      email: [''],
      prefContact: [''],
      jobDesc: [''],
    });
  }
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
    const customerData: any = new FormData();
    customerData.append('fullName', this.form.get('fullName').value);
    customerData.append('phone', this.form.get('phone').value);
    customerData.append('email', this.form.get('email').value);
    customerData.append('prefContact', this.form.get('prefContact').value);
    customerData.append('jobDesc', this.form.get('jobDesc').value);
    console.log('this is the data available in the onSubmit function' + this.customerData.value);
    this.http.post('http://localhost:3000/ticket', customerData).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }
}

// import { Component, Injectable, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-customer-form',
//   templateUrl: './customer-form.page.html',
//   styleUrls: ['./customer-form.page.scss'],
// })
// export class CustomerFormPage implements OnInit {

//   customerData: any;

//   private priority: string;

//   constructor(private route: ActivatedRoute) { }

//   ngOnInit() {

//     this.priority = this.route.snapshot.paramMap.get('priority');

//     this.customerData = new FormGroup({
//       fullName: new FormControl(),
//       phone: new FormControl(),
//       email: new FormControl(),
//       prefContact: new FormControl(),
//       jobDesc: new FormControl()
//     });

//   }

//   onSubmit() {
//     console.log(this.customerData.value);
//   }

// }
