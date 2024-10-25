import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Claim } from '../../core/models/claim.model';
import { Router } from '@angular/router';
import { ClaimsService } from '../../core/services/claims.service';
import { MasterDataService } from '../../core/services/master-data.service';

@Component({
  selector: 'app-claim-form',
  templateUrl: './claim-form.component.html',
  styleUrls: ['./claim-form.component.css'],
})

export class ClaimFormComponent implements OnInit {
  claimForm: FormGroup;
  companies: string[] = [];
  reasons: string[] = [];
  readonly defaultStatus = 'Pendiente';

  constructor(
    private fb: FormBuilder,
    private claimsService: ClaimsService,
    private masterDataService: MasterDataService,
    private router: Router
  ) {
    // Inicializamos el formulario con los campos requeridos
    this.claimForm = this.fb.group({
      company: ['', Validators.required],
      reason: ['', Validators.required],
      description: ['', Validators.required],
      status: [{ value: this.defaultStatus, disabled: true }],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    // Cargar las compañías y motivos desde los datos maestros
    this.masterDataService.getCompanies().subscribe({
      next: (data) => (this.companies = data),
      error: (err) => console.error('Error al obtener compañías', err),
    });

    this.masterDataService.getReasons().subscribe({
      next: (data) => (this.reasons = data),
      error: (err) => console.error('Error al obtener motivos', err),
    });
  }

  // Método para enviar el formulario de creación de reclamos
  submitClaim() {
    if (this.claimForm.valid) {
      // Crear un objeto Claim con los datos del formulario
      const claim: Claim = {
        ...this.claimForm.getRawValue(),
        status: this.defaultStatus,  // Estado por defecto
      };

      this.claimsService.createClaim(claim).subscribe({
        next: () => {
          console.log('Reclamo creado con éxito');
          this.router.navigate(['/']);  // Redirigir a la lista de reclamos después de crear
        },
        error: (err) => console.error('Error al crear reclamo', err),
      });
    }
  }

  // Manejar la acción de cancelar
  onCancel(): void {
    this.router.navigate(['/']);
  }
}
