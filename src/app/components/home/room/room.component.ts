import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  

  constructor(private roomservice: RoomService,private router:Router) { }
  RoomList:any;

  ngOnInit(): void {
    this.GetAllRoom();
  }

  roomForm = new FormGroup({
    room_type : new FormControl('',[
     
     
      
    ]),
    check_in : new FormControl('',[
     
    ]),
    
    check_out : new FormControl('',[
    
      
      
    ]),

    status : new FormControl('',[
     
      
      
    ]),

    
   
  });

  roomSubmited(){
    console.log(this.roomForm.valid);
    console.log(this.roomForm.value);
    this.roomservice.roomInsert(this.roomForm.value
        
      ).subscribe(res => {
      console.log(res);
      },
      err =>{console.log(err)}
      
      );
  }  
  GetAllRoom(){
    this.roomservice.roomGetAll().subscribe(res => {
      this.RoomList=res;
      console.log(this.RoomList);
    })
  }

  DeleteRoom(room_id:number){
    console.log(room_id);
    this.roomservice.roomDelete(room_id).subscribe(res => {
      this.roomservice.roomGetAll();
    })
  }

 
  

 
    
  get RoomType(): FormControl {
    return this.roomForm.get("room_type") as FormControl;
  }
  
  get Check_in(): FormControl {
    return this.roomForm.get("check_in") as FormControl;
  }

  get Check_out(): FormControl {
    return this.roomForm.get("check_out") as FormControl;
  }

  get Status(): FormControl {
    return this.roomForm.get("status") as FormControl;
  }

 
}
