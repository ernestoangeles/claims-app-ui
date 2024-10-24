import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimsListComponent } from './claims-list.component';

@NgModule({
  declarations: [ClaimsListComponent],
  imports: [CommonModule],
  exports: [ClaimsListComponent]
})
export class ClaimsListModule { }
