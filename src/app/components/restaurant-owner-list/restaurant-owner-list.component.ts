import { Component, OnInit } from '@angular/core';
import { RestaurantOwner } from '../../entities/restaurantOwner';
import { RestaurantOwnerService } from '../../services/restaurantOwner.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurant-owner-list',
  templateUrl: './restaurant-owner-list.component.html',
  styleUrls: ['./restaurant-owner-list.component.css']
})
export class RestaurantOwnerListComponent implements OnInit {

  restaurantOwners: RestaurantOwner[];

  constructor(private restaurantOwnerService: RestaurantOwnerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getrestaurantOwners();
  }

  private getrestaurantOwners() {
    this.restaurantOwnerService.getRestaurantOwnersList().subscribe(data => {
      this.restaurantOwners = data;
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

  updateRestaurantOwner(id: number) {
    this.router.navigate(['update-restaurantOwner', id]);
  }

  deleteRestaurantOwner(id: number) {
    this.restaurantOwnerService.deleteRestaurantOwner(id).subscribe(data => {
      console.log(data);
      this.getrestaurantOwners();
    })
  }

}
