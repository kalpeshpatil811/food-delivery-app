import { Component, OnInit } from '@angular/core';
import { Customer } from '../../entities/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers() {
    this.customerService.getCustomersList().subscribe(data => {
      this.customers = data;
      console.log(data);
    });
  }

  /*

  this.customers = [{
    "customerId":1,
    "firstName":"Ram",
    "lastName":"Krishna",
    "mobileNumber":"9999999999",
    "email":"ram@gmail.com",
    "city":"Hyderabad",
    "address":"Hayathnagar",
    "pincode":"501505"
  },
  {
    "customerId":2,
    "firstName":"Sita",
    "lastName":"Ram",
    "mobileNumber":"9999999999",
    "email":"sita@gmail.com",
    "city":"Hyderabad",
    "address":"Hayathnagar",
    "pincode":"501505"
  

  }];

  */

  updateCustomer(id: number) {
    this.router.navigate(['update-customer', id]);
  }

  deleteCustomer(id: number) {
    if (confirm("Do you want to delete?")) {
      this.customerService.deleteCustomer(id).subscribe(data => {
        console.log(data);
        this.getCustomers();
      })
    }
  }

}
