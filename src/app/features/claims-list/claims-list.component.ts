import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from '../../core/models/claim.model';
import { ClaimsService } from '../../core/services/claims.service';

@Component({
  selector: 'app-claims-list',
  templateUrl: './claims-list.component.html',
  styleUrl: './claims-list.component.css',
})

export class ClaimsListComponent implements OnInit {
  claims: Claim[] = [];

  constructor(private claimsService: ClaimsService, private router: Router) { }

  ngOnInit() {
    this.claimsService.getClaims().subscribe({
      next: (data) => (this.claims = data),
      error: (err) => console.error('Error al obtener reclamos', err),
    });
  }

  viewDetail(id: string) {
    this.router.navigate([`/claims/${id}`]);
  }

  changeStatus(claim: Claim) {
    this.dialog.open(ChangeStatusComponent, {
      data: { claimId: claim.id },
    });
  }
}
