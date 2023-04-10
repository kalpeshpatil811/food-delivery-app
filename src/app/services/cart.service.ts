import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:9091/api/v1/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCart(cartId: number): Observable<any> {
    return this.http.get(`${baseUrl}/${cartId}`);
  }

  addToCart(cartId: number, dishId: number): Observable<any> {
    return this.http.post(`${baseUrl}/addToCart/${cartId}/${dishId}`, null);
  }

  increaseQuantity(cartId: number, cartItemId: number): Observable<any> {
    return this.http.post(`${baseUrl}/${cartId}/${cartItemId}`, null);
  }

  removeFromCart(cartId: number, cartItemId: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${cartId}/${cartItemId}`);
  }

  removeAllFromCart(cartId: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${cartId}`);
  }
}
