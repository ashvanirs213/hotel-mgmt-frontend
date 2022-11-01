import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { StaffComponent } from './components/home/staff/staff.component';
import { StaffService } from './services/staff.service';
import { RoomComponent } from './components/home/room/room.component';
import { GuestComponent } from './components/home/guest/guest.component';
import { ReservationComponent } from './components/home/reservation/reservation.component';
import { PaymentComponent } from './components/home/payment/payment.component';
import { RateComponent } from './components/home/rate/rate.component';






@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    StaffComponent,
    RoomComponent,
    GuestComponent,
    ReservationComponent,
    PaymentComponent,
    RateComponent,
    
   
   
   
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    AuthService,StaffService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
