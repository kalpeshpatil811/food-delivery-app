import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantOwnerService } from '../../services/restaurantOwner.service';
import { RestaurantOwner } from '../../entities/restaurantOwner';

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.css']
})
export class RegisterOwnerComponent implements OnInit {

  restaurantOwner: RestaurantOwner = new RestaurantOwner();
  constructor(private restaurantOwnerService: RestaurantOwnerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveRestaurantOwner() {
    this.restaurantOwnerService.registerRestaurantOwner(this.restaurantOwner).subscribe(data => {
      console.log(data);
      this.router.navigate(['/login']);
    },
      error => console.log(error));
  }

  onSubmit() {
    console.log(this.restaurantOwner);
    this.saveRestaurantOwner();
  }
}