import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Claim } from '../models/claim.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ClaimsService {
  private apiUrl = `${environment.apiUrl}/claims`;

  constructor(private http: HttpClient) { }

  // Obtener todos los reclamos
  getClaims(): Observable<Claim[]> {
    return this.http.get<Claim[]>(this.apiUrl);
  }

  // Obtener un reclamo por su ID
  getClaimById(id: string): Observable<Claim> {
    return this.http.get<Claim>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo reclamo
  createClaim(claim: Claim): Observable<Claim> {
    return this.http.post<Claim>(this.apiUrl, claim);
  }

  // Actualizar el estado de un reclamo
  updateClaimStatus(id: string, status: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/status`, { status });
  }
}
