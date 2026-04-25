import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client, Company, ClientApiResponse, CompanyApiResponse } from '../../models/client-company.models';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientCompanyService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Méthodes pour les Clients
  getClients(params?: any): Observable<ClientApiResponse> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined) {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get<ClientApiResponse>(`${this.baseUrl}/clients`, { params: httpParams });
  }

getClient(id: number): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/clients/${id}`);
}

  createClient(client: Partial<Client>): Observable<{data: Client}> {
    return this.http.post<{data: Client}>(`${this.baseUrl}/clients`, client);
  }

  updateClient(id: number, client: Partial<Client>): Observable<{data: Client}> {
    return this.http.put<{data: Client}>(`${this.baseUrl}/clients/${id}`, client);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/clients/${id}`);
  }

  // Méthodes pour les Entreprises
  getCompanies(params?: any): Observable<CompanyApiResponse> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined) {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get<CompanyApiResponse>(`${this.baseUrl}/entreprises`, { params: httpParams });
  }

getCompany(id: number): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/entreprises/${id}`);
}
  createCompany(company: Partial<Company>): Observable<{data: Company}> {
    return this.http.post<{data: Company}>(`${this.baseUrl}/entreprises`, company);
  }
  createMyCompany(company: Partial<Company>): Observable<{data: Company}> {
    return this.http.post<{data: Company}>(`${this.baseUrl}/mes-entreprises`, company);
  }

  updateCompany(id: number, company: Partial<Company>): Observable<{data: Company}> {
    return this.http.put<{data: Company}>(`${this.baseUrl}/entreprises/${id}`, company);
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/entreprises/${id}`);
  }

  // Méthodes pour récupérer les entreprises d'un client
  getCompaniesByClient(clientId: number): Observable<CompanyApiResponse> {
    return this.http.get<CompanyApiResponse>(`${this.baseUrl}/mes-entreprises`);
  }

  
getMyCompanies(): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/mes-entreprises`);
}
}
