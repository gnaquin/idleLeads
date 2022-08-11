import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerFormPageRoutingModule } from './customer-form-routing.module';

import { CustomerFormPage } from './customer-form.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerFormPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [CustomerFormPage]
})
export class CustomerFormPageModule {}
