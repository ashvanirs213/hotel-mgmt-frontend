import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  constructor(private guestservice: GuestService,private router:Router) { }
  GuestList:any;
  ngOnInit(): void {
    this.GetAllGuest();
  }

  guestForm = new FormGroup({
    name : new FormControl('',[
      Validators.required,
      Validators.minLength(2),
     
      
    ]),
    address : new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    
    phnNumber : new FormControl('',[
      Validators.required,
      
      
    ]),

    gender : new FormControl('',[
      Validators.required,
      
      
    ]),

   
  });

  guestSubmited(){
    console.log(this.guestForm.valid);
    console.log(this.guestForm.value);
    this.guestservice.guestInsert(this.guestForm.value
        
      ).subscribe(res => {
      console.log(res);
      },
      err =>{console.log(err)}
      
      );
  }  

  GetAllGuest(){
    this.guestservice.guestGetAll().subscribe(res => {
      this.GuestList=res;
      console.log(this.GuestList);
    })
  }
  DeleteGuest(guestId:number){
    console.log(guestId);
    this.guestservice.guestDelete(guestId).subscribe(res => {
      this.guestservice.guestGetAll();
    })
  }

  get Name(): FormControl {
    return this.guestForm.get("name") as FormControl;
  }
  
  get PhnNumber(): FormControl {
    return this.guestForm.get("phnNumber") as FormControl;
  }

  get Gender(): FormControl {
    return this.guestForm.get("gender") as FormControl;
  }

  get Address(): FormControl {
    return this.guestForm.get("address") as FormControl;
  }

 


}
