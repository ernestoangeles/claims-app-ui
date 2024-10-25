import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Claim } from '../../core/models/claim.model';
import { ClaimsService } from '../../core/services/claims.service';

@Component({
  selector: 'app-claim-detail',
  templateUrl: './claim-detail.component.html',
  styleUrls: ['./claim-detail.component.css']
})
export class ClaimDetailComponent implements OnInit {
  claim!: Claim;

  constructor(
    private route: ActivatedRoute,
    private claimsService: ClaimsService
  ) { }

  ngOnInit(): void {
    const claimId = this.route.snapshot.paramMap.get('id');
    if (claimId) {
      this.claimsService.getClaimById(claimId).subscribe({
        next: (data) => this.claim = data,
        error: (err) => console.error('Error al obtener detalles del reclamo', err),
      });
    }
  }

  close() {
    window.history.back();  // Redirige a la lista de reclamos
  }
}
