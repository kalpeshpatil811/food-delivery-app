import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Dish } from 'src/app/entities/dish';
import { CartService } from 'src/app/services/cart.service';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-customer-add-to-cart',
  templateUrl: './customer-add-to-cart.component.html',
  styleUrls: ['./customer-add-to-cart.component.css']
})
export class CustomerAddToCartComponent implements OnInit {

  dishes: Dish[];
  searchText = '';
  dataSource = new MatTableDataSource();

  constructor(private dishService: DishService, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.getDishes();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getDishes() {
    this.dishService.getAllDishes().subscribe(data => {
      this.dishes = data;
      console.log(data);
    })
  }

  addToCart(dish: Dish) {
    this.cartService.addToCart(1, dish.dishId).subscribe({
      next: (data) => {
        alert("Added to cart");
      },
      error: (err) => {
        alert("Error adding dish");
      }
    })
  }

  setDishes = (data: any) => {
    this.dishes = data;
  }

  goToDishList() {
    this.router.navigate(['/customer-add-to-cart']);
  }

}
