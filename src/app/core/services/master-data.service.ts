import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MasterDataService {
  private apiUrl = `${environment.apiUrl}/master-data`;

  constructor(private http: HttpClient) { }

  // Obtener todos los datos maestros
  getAllMasterData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  // Obtener la lista de compañías
  getCompanies(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/companies`);
  }

  // Obtener la lista de motivos
  getReasons(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/reasons`);
  }

  // Obtener la lista de estados
  getStatuses(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/statuses`);
  }
}
