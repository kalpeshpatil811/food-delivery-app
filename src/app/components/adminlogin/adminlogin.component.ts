import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  form: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Ok");
    this.router.navigate(['/admin-homepage']);
  }

}
