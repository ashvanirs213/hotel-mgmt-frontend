import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private staffservice: StaffService,private router:Router) {
    
   }
   StaffList:any;

  ngOnInit(): void {
    this.GetAllStaff();
  }

  staffForm = new FormGroup({
    staffName : new FormControl('',[
      Validators.required,
      Validators.minLength(2),
     
      
    ]),
    address : new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    
    salary : new FormControl('',[
      Validators.required,
      
      
    ]),

    age : new FormControl('',[
      Validators.required,
      
      
    ]),

    email : new FormControl('',[
      Validators.required,
     
      
    ]),
   
  });

  staffSubmited(){
    console.log(this.staffForm.valid);
    console.log(this.staffForm.value);
    this.staffservice.staffInsert(this.staffForm.value
        
      ).subscribe(res => {
      console.log(res);
      },
      err =>{console.log(err)}
      
      );
  }  

  UpdateStaff(){
    console.log(this.staffForm.valid);
    console.log(this.staffForm.value);
    this.staffservice.staffUpdate(this.staffForm.value
        
      ).subscribe(res => {
      console.log(res);
      },
      err =>{console.log(err)}
      
      );
  }
    
  GetAllStaff(){
    this.staffservice.staffGetAll().subscribe(res => {
      this.StaffList=res;
      console.log(this.StaffList);
    })
  }
  DeleteStaff(staffId:number){
    console.log(staffId);
    this.staffservice.staffDelete(staffId).subscribe(res => {
      this.staffservice.staffGetAll();
    })
  }

  

  get StaffName(): FormControl {
    return this.staffForm.get("staffName") as FormControl;
  }
  
  get Email(): FormControl {
    return this.staffForm.get("email") as FormControl;
  }

  get Age(): FormControl {
    return this.staffForm.get("age") as FormControl;
  }

  get Address(): FormControl {
    return this.staffForm.get("address") as FormControl;
  }

  get Salary(): FormControl {
    return this.staffForm.get("salary") as FormControl;
  }

 
}
