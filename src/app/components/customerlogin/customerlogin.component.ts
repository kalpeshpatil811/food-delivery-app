import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  form: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Ok");
    this.router.navigate(['/customer-add-to-cart']);
  }
}
