import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeStatusComponent } from './change-status.component';

@NgModule({
  declarations: [ChangeStatusComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ChangeStatusComponent]
})
export class ChangeStatusModule { }
