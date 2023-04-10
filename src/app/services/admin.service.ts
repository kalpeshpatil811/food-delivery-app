import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../entities/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL = "http://localhost:9091/api/v1/admin";

  constructor(private httpClient: HttpClient) { }

  getAdminsList(): Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(`${this.baseURL}`);
  }

  createAdmin(admin: Admin): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, admin);
  }

  getAdminById(id: number): Observable<Admin> {
    return this.httpClient.get<Admin>(`${this.baseURL}/${id}`);
  }

  updateAdmin(id: number, admin: Admin): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, admin);
  }

  deleteAdmin(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
