import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  repeatPass: string = 'none';
  
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    username : new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
      
    ]),
    role : new FormControl('',[
      Validators.required,
      Validators.minLength(2)
    ]),
    password : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15),]),
    
   
  });

  
  registerSubmited(){
    
    console.log(this.registerForm.valid);
      this.repeatPass= 'none'
      console.log(this.registerForm.value);
      

      this.authService.registerUser(this.registerForm.value
        
        ).subscribe(res => {
        console.log(res);
        },
        err =>{console.log(err)}
        
        );
  
      
      
    
      
        alert("Registered successfully");
    }
  get UserName(): FormControl {
    return this.registerForm.get("username") as FormControl;
  }

  get Role(): FormControl {
    return this.registerForm.get("role") as FormControl;
  }

  get PWD(): FormControl{
    return this.registerForm.get('password') as FormControl;
  }

  

}
