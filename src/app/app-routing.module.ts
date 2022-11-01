import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestComponent } from './components/home/guest/guest.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/home/payment/payment.component';
import { RateComponent } from './components/home/rate/rate.component';
import { ReservationComponent } from './components/home/reservation/reservation.component';
import { RoomComponent } from './components/home/room/room.component';
import { StaffComponent } from './components/home/staff/staff.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'room',
    component: RoomComponent
  },
  {
    path: 'guest',
    component: GuestComponent
  },
  {
    path: 'reservation',
    component: ReservationComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'rate',
    component: RateComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
