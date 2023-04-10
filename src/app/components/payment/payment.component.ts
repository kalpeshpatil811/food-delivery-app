import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Payment } from 'src/app/entities/payment';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {

  payment: Payment = new Payment();

  angForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PaymentComponent>, private cartService: CartService,
    private fb: FormBuilder, private router: Router
  ) {
    this.validateForm();
  }

  ngOnInit(): void {

  }

  onSubmit() {
    alert("Payment successful");
    this.router.navigate(['/paymentdone']);
    this.cartService.removeAllFromCart(1).subscribe({
      next: (data) => {
        console.log("Successful");
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onCancel() {
    this.dialogRef.close();
  }

  validateForm() {
    this.angForm = this.fb.group({
      cardNumber: ['', Validators.required],
      cardHolderName: ['', Validators.required],
      mm: ['', Validators.required],
      yy: ['', Validators.required],
      cvv: ['', Validators.required]
    })
  }

}