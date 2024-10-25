import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaimsListModule } from './features/claims-list/claims-list.module';
import { ClaimFormModule } from './features/claim-form/claim-form.module';
import { SummaryModule } from './features/summary/summary.module';
import { LayoutModule } from './core/layout/layout.module';
import { ChangeStatusModule } from './features/change-status/change-status.module';
import { ClaimDetailModule } from './features/claim-detail/claim-detail.module';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,        // Asegúrate de que LayoutModule esté antes que AppRoutingModule
    AppRoutingModule,
    ClaimsListModule,
    ClaimFormModule,
    SummaryModule,
    ChangeStatusModule,
    ClaimDetailModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
