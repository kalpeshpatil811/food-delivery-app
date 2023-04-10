import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantOwner } from '../entities/restaurantOwner';

@Injectable({
  providedIn: 'root'
})
export class RestaurantOwnerService {

  private baseURL = "http://localhost:9091/owner/";

  constructor(private httpClient: HttpClient) { }

  getRestaurantOwnersList(): Observable<RestaurantOwner[]> {
    return this.httpClient.get<RestaurantOwner[]>(`${this.baseURL + 'restaurants'}`);
  }

  registerRestaurantOwner(owner: RestaurantOwner): Observable<Object> {
    return this.httpClient.post(`${this.baseURL + 'register'}`, owner);
  }

  getRestaurantOwnerById(id: number): Observable<RestaurantOwner> {
    return this.httpClient.get<RestaurantOwner>(`${this.baseURL + 'restaurant'}/${id}`);
  }

  updateRestaurantOwner(id: number, owner: RestaurantOwner): Observable<Object> {
    return this.httpClient.put(`${this.baseURL + 'update'}/${id}`, owner);
  }

  deleteRestaurantOwner(id: number): Observable<Object> {
    alert("Are you sure, Want to delete ?");
    return this.httpClient.delete(`${this.baseURL + 'delete'}/${id}`);
  }

}
