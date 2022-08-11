import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractorFormPageRoutingModule } from './contractor-form-routing.module';

import { ContractorFormPage } from './contractor-form.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractorFormPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [ContractorFormPage]
})
export class ContractorFormPageModule {}
