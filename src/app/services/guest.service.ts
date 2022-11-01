import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http: HttpClient) { }

  baseServerUrl = "https://localhost:7047/api/";

  guestInsert( user:any){
    return this.http.post(this.baseServerUrl + "Guest/InsertGuest" , user );
  }

  guestGetAll(){
    return this.http.get(this.baseServerUrl + "Guest/GetAllGuests" );
  }

  guestDelete(guestId : number){
    return this.http.delete(this.baseServerUrl + "Guest/DeleteGuest?id=" + guestId);
    
  }

}
