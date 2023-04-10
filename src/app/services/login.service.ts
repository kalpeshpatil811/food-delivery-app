import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:9091/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  currentUser: any;

  login(credentials: any): Observable<any> {
    return this.http.post(AUTH_API + 'login/dto', {
      email: credentials.email,
      password: credentials.password,
    }, httpOptions);
  }

  register(user: any): Observable<any> {
    return this.http.post(AUTH_API + 'owner/register', {
      restaurantName: user.restaurantName,
      restaurantMobile: user.restaurantMobile,
      ownerFirstName: user.ownerFirstName,
      ownerLastName: user.ownerLastName,
      restaurantCity: user.restaurantCity,
      restaurantState: user.restaurantState,
      restaurantPincode: user.restaurantPincode,
      email: user.email,
      password: user.password,
      role: user.role
    }, httpOptions);
  }

  logout(user: any): Observable<any> {
    return this.http.patch(AUTH_API + 'logout/' + this.currentUser.email, {
      email: user.email
    }, httpOptions)
  }
}
