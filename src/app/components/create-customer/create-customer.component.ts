import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../entities/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCustomer() {
    this.customerService.createCustomer(this.customer).subscribe(data => {
      console.log(data);
      alert("Registration Scuccessful");
      this.goToCustomerList();
    },
      error => console.log(error));
  }

  goToCustomerList() {
    this.router.navigate(['/customerlogin']);
  }

  onSubmit() {
    console.log(this.customer);
    this.saveCustomer();
  }

}
