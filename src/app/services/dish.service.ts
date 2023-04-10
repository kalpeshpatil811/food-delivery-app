import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from '../entities/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private BASEURL = "http://localhost:9091/api/v1/dish";
  constructor(private httpClient: HttpClient) { }

  getAllDishes(): Observable<any> {
    return this.httpClient.get(`${this.BASEURL}`);
  }

  addDish(dish: Dish): Observable<any> {
    return this.httpClient.post(`${this.BASEURL}`, dish);
  }

  updateDish(dish: Dish): Observable<any> {
    return this.httpClient.put(`${this.BASEURL}`, dish);
  }

  getDishById(dishId: number): Observable<Dish> {
    return this.httpClient.get<Dish>(`${this.BASEURL}/${dishId}`);
  }

  deleteDish(dishId: number): Observable<Dish> {
    return this.httpClient.delete<Dish>(`${this.BASEURL}/${dishId}`);
  }

}
