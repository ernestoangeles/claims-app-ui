import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClaimDetailComponent } from './claim-detail.component';

@NgModule({
  declarations: [ClaimDetailComponent],
  imports: [CommonModule, FormsModule],
  exports: [ClaimDetailComponent]
})
export class ClaimDetailModule { }
