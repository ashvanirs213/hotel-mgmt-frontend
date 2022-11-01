import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  baseServerUrl = "https://localhost:7047/api/";

  revInsert( user:any){
    return this.http.post(this.baseServerUrl + "Reservation/InsertReservation" , user );
  }

  revGetAll(){
    return this.http.get(this.baseServerUrl + "Reservation/GetAllReservations" );
  }

  revDelete(id : any){
    return this.http.delete(this.baseServerUrl + "Reservation/DeleteReservation?Id=" + id);
    
  }
}
