import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  loginForm:FormGroup;



  constructor(private fb: FormBuilder,private router: Router,private loginService:LoginService)  {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['',[Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
   if(this.loginForm.valid){
    this.loginService.saveOrUpdateUser(this.loginForm.value).subscribe(
      response =>{
      if(response == true){
        this.router.navigate(['']);
      }
    },
    error => {
      console.log('error',error);
    }

  )
   }
  }

}
