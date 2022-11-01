import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RateService } from 'src/app/services/rate.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  constructor(private rateservice: RateService, private router: Router,private roomservice:RoomService) { }
  RateList:any;
  RoomList:any;

  ngOnInit(): void {
    this.GetAllRoom();
    this.GetAllRate();

  }

  rateForm = new FormGroup({

    no_of_Days : new FormControl('',[]),

    extensionPrice : new FormControl('',[]),

    perNightPrice : new FormControl('',[]),

    totalAmount : new FormControl('',[]),

   

    

    room_type : new FormControl('',[
     
     
      
    ]),
    check_in : new FormControl('',[
     
    ]),
    
    check_out : new FormControl('',[
    
      
      
    ]),

    status : new FormControl('',[
     
      
      
    ]),

    
   
  });

  RateSubmited(){
    console.log(this.rateForm.valid);
    console.log(this.rateForm.value);
    this.rateservice.rateInsert(this.rateForm.value
        
      ).subscribe(res => {
      console.log(res);
      },
      err =>{console.log(err)}
      
      );
  }
  
  GetAllRate(){
    this.rateservice.rateGetAll().subscribe(res => {
      this.RateList=res;
      console.log(this.RateList);
    })
  }
  GetAllRoom(){
    this.roomservice.roomGetAll().subscribe(res => {
      this.RoomList=res;
      console.log(this.RoomList);
    })
  }

  DeleteRate(room_id:number){
    console.log(room_id);
    this.rateservice.rateDelete(room_id).subscribe(res => {
      this.rateservice.rateGetAll();
    })
  }

  get room_type(): FormControl {
    return this.rateForm.get("room_type") as FormControl;
  }
  
  get check_in(): FormControl {
    return this.rateForm.get("check_in") as FormControl;
  }

  get check_out(): FormControl {
    return this.rateForm.get("check_out") as FormControl;
  }

  get status(): FormControl {
    return this.rateForm.get("status") as FormControl;
  }

  get no_of_Days(): FormControl {
    return this.rateForm.get("no_of_Days") as FormControl;
  }

  get extensionPrice(): FormControl {
    return this.rateForm.get("extensionPrice") as FormControl;
  }
  get perNightPrice(): FormControl {
    return this.rateForm.get("perNightPrice") as FormControl;
  }
  get totalAmount(): FormControl {
    return this.rateForm.get("totalAmount") as FormControl;
  }

 
}
