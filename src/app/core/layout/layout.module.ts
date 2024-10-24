import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Importante para router-outlet
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule    // Necesario para el router-outlet
  ],
  exports: [
    LayoutComponent // Importante: exportar el componente
  ]
})
export class LayoutModule { }
