import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private reservationService: ReservationService,private router:Router) { }
  RevList:any;
  ngOnInit(): void {
    this.GetAllRev();
  }


  revForm = new FormGroup({
    no_of_children : new FormControl('',[
      
      
     
      
    ]),
    no_of_adults : new FormControl('',[
      Validators.required,
    ]),
    
    checkin_date : new FormControl('',[
      Validators.required,
      
      
    ]),

    checkout_date : new FormControl('',[
      Validators.required,
      
      
    ]),

    no_of_rooms : new FormControl('',[
      Validators.required,
     
      
    ]),

    phnNumber : new FormControl('',[
      Validators.required,
    ])
  });

  RevSubmited(){
    console.log(this.revForm.valid);
    console.log(this.revForm.value);
    this.reservationService.revInsert(this.revForm.value
        
      ).subscribe(res => {
      console.log(res);
      },
      err =>{console.log(err)}
      
      );
  }  

  GetAllRev(){
    this.reservationService.revGetAll().subscribe(res => {
      this.RevList=res;
      console.log(this.RevList);
    })
  }
  DeleteRev(id:any){
    console.log(id);
    this.reservationService.revDelete(id).subscribe(res => {
      this.reservationService.revGetAll();
    })
  }


  get no_of_children(): FormControl {
    return this.revForm.get("no_of_children") as FormControl;
  }
  
  get no_of_adults(): FormControl {
    return this.revForm.get("no_of_adults") as FormControl;
  }

  get no_of_rooms(): FormControl {
    return this.revForm.get("no_of_rooms") as FormControl;
  }

  get checkin_date(): FormControl {
    return this.revForm.get("checkin_date") as FormControl;
  }

  get checkout_date(): FormControl {
    return this.revForm.get("checkout_date") as FormControl;
  }

  get phnNumber(): FormControl {
    return this.revForm.get("phnNumber") as FormControl;
  }
  

}
