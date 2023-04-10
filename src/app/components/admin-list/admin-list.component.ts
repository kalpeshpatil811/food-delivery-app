import { Component, OnInit } from '@angular/core';
import { Admin } from '../../entities/admin';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  admins: Admin[];

  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  private getAdmins() {
    this.adminService.getAdminsList().subscribe(data => {
      this.admins = data;
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

  updateAdmin(id: number) {
    this.router.navigate(['update-admin', id]);
  }

  deleteAdmin(id: number) {
    this.adminService.deleteAdmin(id).subscribe(data => {
      console.log(data);
      this.getAdmins();
    })
  }


}
