import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CreateAdminComponent } from './components/create-admin/create-admin.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { CustomerAddToCartComponent } from './components/customer-add-to-cart/customer-add-to-cart.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { DishesListComponent } from './components/dishes-list/dishes-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PaymentdoneComponent } from './components/paymentdone/paymentdone.component';
import { RegisterOwnerComponent } from './components/register-owner/register-owner.component';
import { RegistrationDoneComponent } from './components/registration-done/registration-done.component';
import { RestaurantOwnerListComponent } from './components/restaurant-owner-list/restaurant-owner-list.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { UpdateRestaurantOwnerComponent } from './components/update-restaurant-owner/update-restaurant-owner.component';

const routes: Routes = [
  { path: "cart/:cartId", component: CartComponent },
  { path: 'dishes-list', component: DishesListComponent },
  { path: 'customer-add-to-cart', component: CustomerAddToCartComponent },

  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'customers', component: CustomerListComponent },
  { path: 'create-customer', component: CreateCustomerComponent },
  { path: 'update-customer/:id', component: UpdateCustomerComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },

  { path: 'admins', component: AdminListComponent },
  { path: 'create-admin', component: CreateAdminComponent },
  { path: 'update-admin/:id', component: UpdateAdminComponent },

  { path: 'register-owner', component: RegisterOwnerComponent },
  { path: 'update-restaurantOwner/:id', component: UpdateRestaurantOwnerComponent },
  { path: 'restaurantOwners', component: RestaurantOwnerListComponent },
  { path: 'login', component: LoginComponent },

  { path: 'admin-homepage', component: AdminHomepageComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'customerlogin', component: CustomerloginComponent },
  { path: 'registration-done', component: RegistrationDoneComponent },
  { path: 'paymentdone', component: PaymentdoneComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
