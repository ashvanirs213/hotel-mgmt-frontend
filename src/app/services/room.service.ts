import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  baseServerUrl = "https://localhost:7047/api/";

  roomInsert( user:any){
    return this.http.post(this.baseServerUrl + "Room/InsertRoom" , user );
  }

  roomGetAll(){
    return this.http.get(this.baseServerUrl + "Room/GetAllRooms" );
  }

  roomDelete(room_id : number){
    return this.http.delete(this.baseServerUrl + "Room/RemoveRoom?id=" + room_id);
    
  }

}
