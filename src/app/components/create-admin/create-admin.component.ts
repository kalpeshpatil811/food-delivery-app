import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../../entities/admin';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {

  admin: Admin = new Admin();
  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveAdmin() {
    this.adminService.createAdmin(this.admin).subscribe(data => {
      console.log(data);
      this.goToAdminList();
    },
      error => console.log(error));
  }

  goToAdminList() {
    this.router.navigate(['/registration-done']);
  }

  onSubmit() {
    console.log(this.admin);
    this.saveAdmin();
  }

}
