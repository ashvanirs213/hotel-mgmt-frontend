import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private paymentservice: PaymentService,private router:Router) { }
  PayList:any;
  ngOnInit(): void {
    this.GetAllPay();
  }

  payForm = new FormGroup({
    cardholderName : new FormControl('',[
     
     
      
    ]),
    cardNumber : new FormControl('',[
     
    ]),
    
    email : new FormControl('',[
    
    ]),

    
  });


  paySubmited(){
    console.log(this.payForm.valid);
    console.log(this.payForm.value);
    this.paymentservice.payInsert(this.payForm.value
        
      ).subscribe(res => {
      console.log(res);
      },
      err =>{console.log(err)}
      
      );
  }  

  GetAllPay(){
    this.paymentservice.payGetAll().subscribe(res => {
      this.PayList=res;
      console.log(this.PayList);
    })
  }

  DeletePay(paymentID:number){
    console.log(paymentID);
    this.paymentservice.payDelete(paymentID).subscribe(res => {
      this.paymentservice.payGetAll();
    })
  }

  get cardholderName(): FormControl {
    return this.payForm.get("cardholderName") as FormControl;
  }
  
  get cardNumber (): FormControl {
    return this.payForm.get("cardNumber") as FormControl;
  }

  get email(): FormControl {
    return this.payForm.get("email") as FormControl;
  }

 

}
