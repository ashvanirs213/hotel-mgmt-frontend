import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private http: HttpClient) { }

  baseServerUrl = "https://localhost:7047/api/";

  rateInsert( user:any){
    return this.http.post(this.baseServerUrl + "Rate/InsertRate" , user );
  }

  rateGetAll(){
    return this.http.get(this.baseServerUrl + "Rate/GetAllRate" );
    
  }

  rateDelete(room_id : number){
    return this.http.delete(this.baseServerUrl + "Rate/DeleteRate?Id=" + room_id);
    
  }
}
