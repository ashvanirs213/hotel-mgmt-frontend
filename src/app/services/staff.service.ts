import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) { }

  baseServerUrl = "https://localhost:7047/api/";

  staffInsert( user:any){
    return this.http.post(this.baseServerUrl + "Staffs/InsertStaff" , user );
  }

  staffGetAll(){
    return this.http.get(this.baseServerUrl + "Staffs/GetAllStaff" );
  }

  staffDelete(staffId : number){
    return this.http.delete(this.baseServerUrl + "Staffs/DeleteStaff?Id=" + staffId);
    
  }

  staffUpdate(user2:any){
    return this.http.put(this.baseServerUrl + "Staffs/UpdateStaff" , user2);
  }

}
