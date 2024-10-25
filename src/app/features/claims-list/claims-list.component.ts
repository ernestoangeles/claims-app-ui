import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from '../../core/models/claim.model';
import { ChangeStatusComponent } from '../change-status/change-status.component';
import { ClaimsService } from '../../core/services/claims.service';

@Component({
  selector: 'app-claims-list',
  templateUrl: './claims-list.component.html',
  styleUrls: ['./claims-list.component.css']
})
export class ClaimsListComponent implements OnInit {
  claims: Claim[] = [];

  constructor(
    private claimsService: ClaimsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Obtener los reclamos al cargar la página
    this.claimsService.getClaims().subscribe({
      next: (data) => (this.claims = data),
      error: (err) => console.error('Error al obtener reclamos', err),
    });
  }

  // Redirige a la página de detalles del reclamo
  viewDetail(claimId: string): void {
    this.router.navigate([`/claims/${claimId}`]);
  }

  // Redirige a la página de cambio de estado del reclamo
  changeStatus(claimId: string): void {
    this.router.navigate([`/claims/change-status/${claimId}`]);
  }

  removeAccents(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').toLowerCase();
  }
}
