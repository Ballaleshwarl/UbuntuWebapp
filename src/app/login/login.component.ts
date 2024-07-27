import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  notificationFlag:any=false;

  constructor(private fb: FormBuilder,private router: Router,private loginService:LoginService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // this.router.navigate(['/home']);
      this.loginService.loginUser(this.loginForm.value).subscribe(
        response =>{
          if(response == true){
            localStorage.setItem("isLoggedIn","true");
           this.router.navigate(["/home"])
            
          }else{
            this.notificationFlag = 'invalidCredentials';
            localStorage.setItem("isLoggedIn","false");
            
          }
        
        },
        error =>{
          console.log('error',error);
        }

      );

    }else
       this.notificationFlag = 'invalidEmail';
  }


}
