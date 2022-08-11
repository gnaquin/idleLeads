import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contractor-form',
  templateUrl: './contractor-form.page.html',
  styleUrls: ['./contractor-form.page.scss'],
})
export class ContractorFormPage implements OnInit {

  private formData: FormGroup;

  constructor() { }

  ngOnInit() {

    this.formData = new FormGroup ({
      fullName: new FormControl(),
      companyName: new FormControl(),
      companyAddress: new FormControl(),
      phone: new FormControl()
    })
  }

  onSubmit() {
    console.log(this.formData.value);
  }

}
