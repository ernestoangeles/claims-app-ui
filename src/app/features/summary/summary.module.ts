import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [SummaryComponent],
  imports: [CommonModule, NgChartsModule],
  exports: [SummaryComponent]
})
export class SummaryModule { }
