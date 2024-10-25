import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsListComponent } from './features/claims-list/claims-list.component';
import { ClaimFormComponent } from './features/claim-form/claim-form.component';
import { SummaryComponent } from './features/summary/summary.component';
import { ClaimDetailComponent } from './features/claim-detail/claim-detail.component';
import { ChangeStatusComponent } from './features/change-status/change-status.component';

const routes: Routes = [
  { path: '', component: ClaimsListComponent },
  { path: 'claims/:id', component: ClaimDetailComponent }, 
  { path: 'claims/change-status/:id', component: ChangeStatusComponent },
  { path: 'claims', component: ClaimFormComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '**', redirectTo: '' },  // Redirige a la página principal si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
