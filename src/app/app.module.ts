import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { PaymentComponent } from './components/payment/payment.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCommonModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DishesListComponent } from './components/dishes-list/dishes-list.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { CustomerAddToCartComponent } from './components/customer-add-to-cart/customer-add-to-cart.component';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { CreateAdminComponent } from './components/create-admin/create-admin.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { RegisterOwnerComponent } from './components/register-owner/register-owner.component';
import { RestaurantOwnerListComponent } from './components/restaurant-owner-list/restaurant-owner-list.component';
import { UpdateRestaurantOwnerComponent } from './components/update-restaurant-owner/update-restaurant-owner.component';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PaymentdoneComponent } from './components/paymentdone/paymentdone.component';
import { LoginComponent } from './components/login/login.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { RegistrationDoneComponent } from './components/registration-done/registration-done.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    PaymentComponent,
    DishesListComponent,
    DialogComponent,
    CustomerAddToCartComponent,
    CustomerListComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    HomePageComponent,
    AboutUsComponent,
    ContactUsComponent,
    AdminListComponent,
    CreateAdminComponent,
    UpdateAdminComponent,
    RegisterOwnerComponent,
    RestaurantOwnerListComponent,
    UpdateRestaurantOwnerComponent,
    AdminHomepageComponent,
    PagenotfoundComponent,
    PaymentdoneComponent,
    LoginComponent,
    AdminloginComponent,
    CustomerloginComponent,
    RegistrationDoneComponent,
    SearchPipe
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatGridListModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
