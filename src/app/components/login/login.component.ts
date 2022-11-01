import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginAuth:AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  loginForm = new FormGroup({
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

  isUserValid:boolean = false;

  loginSubmited(){
    
    console.log(this.loginForm.valid);
      
      //console.log(this.loginForm.value);
      

      this.loginAuth.loginUser(this.loginForm.value
        
        ).subscribe(res => {
        if(res == 'User Not found'){
          this.isUserValid=false;
          alert("User Not found");
        }
        else if(res == 'Role Forbidden'){
          this.isUserValid=false;
          alert("Role Forbidden");
        }
        else if(res == 'Wrong Password'){
          this.isUserValid=false;
          alert("Wrong Password");
        }
        
        else{
          this.isUserValid=true;
          this.loginAuth.setToken(res);
          alert("Login Successful");
          this.router.navigateByUrl('home');
          

        }
      });
      
        
      
  
      
      
    
      
   
  }

  get UserName(): FormControl {
    return this.loginForm.get("username") as FormControl;
  }

  get Role(): FormControl {
    return this.loginForm.get("role") as FormControl;
  }

  get PWD(): FormControl{
    return this.loginForm.get('password') as FormControl;
  }

}
