import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/entities/cart';
import { CartItem } from 'src/app/entities/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  currentCart: Cart;
  currentCartItem: CartItem;
  currentIndex: number;

  constructor(private cartService: CartService, private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getCart(this.route.snapshot.paramMap.get("cartId"));
  }

  getCart(cartId: any): void {
    this.cartService.getCart(cartId).subscribe({
      next: (data) => {
        this.currentCart = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  increaseQuantity(cartId: number, cartItemId: number): void {
    this.cartService.increaseQuantity(cartId, cartItemId).subscribe({
      next: (data) => {
        this.currentCart = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  removeFromCart(cartId: number, cartItemId: number): void {
    this.cartService.removeFromCart(cartId, cartItemId).subscribe({
      next: (data) => {
        this.currentCart = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  removeAllFromCart(cartId: number) {
    this.cartService.removeAllFromCart(cartId).subscribe({
      next: (data) => {
        this.currentCart = data;
        alert("Cart clared successfully!");
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  setActiveCartItem(cartItem: CartItem, index: number): void {
    this.currentCartItem = cartItem;
    this.currentIndex = index;
  }

  openDialog() {
    let dialogRef = this.dialog.open(PaymentComponent, {
      width: '650px',
      height: '450px',
    });

    dialogRef.afterOpened().subscribe(res => {
      console.log("Dialog Opened");
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log("Dialog Closed");
    });
  }

}
