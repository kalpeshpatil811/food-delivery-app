import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-delivery-app';

  // currentUser: any = "User";
  // loginService: LoginService;
  // router: Router;

  // onLogout() {
  //   this.loginService.logout(this.currentUser).subscribe({
  //     next: (data) => {
  //       this.router.navigate(['/login']);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   })
  // }
}
