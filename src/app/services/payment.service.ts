import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  baseServerUrl = "https://localhost:7047/api/";

  payInsert( user:any){
    return this.http.post(this.baseServerUrl + "Payment/InsertPayment" , user );
  }

  payGetAll(){
    return this.http.get(this.baseServerUrl + "Payment/GetAllPayment" );
  }

  payDelete(paymentID : number){
    return this.http.delete(this.baseServerUrl + "Payment/DeletePayment?Id=" + paymentID);
    
  }

}
