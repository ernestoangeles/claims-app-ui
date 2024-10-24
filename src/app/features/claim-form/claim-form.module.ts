import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClaimFormComponent } from './claim-form.component';

@NgModule({
  declarations: [
    ClaimFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ClaimFormComponent
  ]
})
export class ClaimFormModule { }
