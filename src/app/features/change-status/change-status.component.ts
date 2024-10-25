import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimsService } from '../../core/services/claims.service';
import { MasterDataService } from '../../core/services/master-data.service';  // Importa el servicio MasterData
import { Claim } from '../../core/models/claim.model';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.css']
})
export class ChangeStatusComponent implements OnInit {
  changeStatusForm!: FormGroup;
  claim!: Claim;
  statusList: string[] = [];  // Lista de estados cargada dinámicamente
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private claimsService: ClaimsService,
    private masterDataService: MasterDataService,  // Inyecta el servicio MasterData
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    const claimId = this.route.snapshot.paramMap.get('id');
    if (claimId) {
      this.loadClaim(claimId);
    }
    this.loadStatuses();  // Cargar los estados desde MasterData
  }

  // Inicializar el formulario con validaciones
  initializeForm(): void {
    this.changeStatusForm = this.formBuilder.group({
      code: [{ value: '', disabled: true }, Validators.required],
      status: ['', Validators.required],
      comment: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Cargar el reclamo con base en el ID
  loadClaim(claimId: string): void {
    this.claimsService.getClaimById(claimId).subscribe({
      next: (data: Claim) => {
        this.claim = data;
        this.changeStatusForm.patchValue({
          code: this.claim.code,
          status: this.claim.status,
          comment: ''  // El comentario inicia vacío
        });
      },
      error: (err) => console.error('Error al obtener el reclamo', err)
    });
  }

  // Cargar los estados desde el servicio MasterData y quitar opción en blanco
  loadStatuses(): void {
    this.masterDataService.getStatuses().subscribe({
      next: (statuses: string[]) => {
        this.statusList = statuses.filter(status => status !== '');  // Filtra cualquier estado vacío
      },
      error: (err) => console.error('Error al obtener los estados', err)
    });
  }

  // Manejar la acción de enviar el formulario
  onSubmit(): void {
    this.submitted = true;
    if (this.changeStatusForm.invalid) {
      return;
    }

    const updatedStatus = this.changeStatusForm.value.status;
    const comment = this.changeStatusForm.value.comment;
    const email = this.changeStatusForm.value.email;

    this.claimsService.updateClaimStatus(this.claim.id, updatedStatus, comment, email).subscribe({
      next: () => {
        console.log('Estado del reclamo actualizado correctamente');
        this.router.navigate(['/']);
      },
      error: (err) => console.error('Error al actualizar el estado', err)
    });
  }

  // Manejar la acción de cancelar
  onCancel(): void {
    this.router.navigate(['/']);
  }
}
