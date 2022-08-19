import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.page.html',
  styleUrls: ['./customer-form.page.scss'],
})
export class CustomerFormPage implements OnInit {

  formData: FormGroup;

  constructor() { }

  ngOnInit() {

    this.formData = new FormGroup({
      fullName: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      prefContact: new FormControl(),
      description: new FormControl()
    });

  }

  onSubmit() {
    console.log(this.formData.value);
  }

}
