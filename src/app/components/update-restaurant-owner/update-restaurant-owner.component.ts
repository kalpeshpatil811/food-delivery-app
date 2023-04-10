import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantOwner } from '../../entities/restaurantOwner';
import { RestaurantOwnerService } from '../../services/restaurantOwner.service';
@Component({
  selector: 'app-update-restaurant-owner',
  templateUrl: './update-restaurant-owner.component.html',
  styleUrls: ['./update-restaurant-owner.component.css']
})
export class UpdateRestaurantOwnerComponent implements OnInit {

  id: number;
  restaurantOwner: RestaurantOwner = new RestaurantOwner();
  constructor(private restaurantOwnerService: RestaurantOwnerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.restaurantOwnerService.getRestaurantOwnerById(this.id).subscribe(data => {
      this.restaurantOwner = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.restaurantOwnerService.updateRestaurantOwner(this.id, this.restaurantOwner).subscribe(data => {
      this.goToRestaurantOwnerList();
    }
      , error => console.log(error));
  }

  goToRestaurantOwnerList() {
    this.router.navigate(['/restaurantOwners']);
  }



}
