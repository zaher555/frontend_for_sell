import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService]

})
export class LoginComponent {
  uploadedFiles: any[] = [];
  loginForm!:FormGroup
  //services
  messageService$=inject(MessageService)
  fb=inject(FormBuilder)
  location=inject(Location)
  authService=inject(AuthService)
  router=inject(Router)
  constructor()
  {
    //form intialization
    this.loginForm=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.minLength(8),Validators.required,Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*()_+=\\-{}\\[\\]:;"\'<>,.?/~`])(?!.*\\s).+$')]],
    })
  }

  //required error
  get required()
  {
    return 'This field is required'
  }

  // call api
  login()
  {
    console.log(this.loginForm.value)
    if(this.loginForm.valid)
    {
      this.authService.login(this.loginForm.value).subscribe({
        next:((res:any)=>{
          // this.messageService$.({
          //   severity: 'success',
          //   summary: 'Success',
          //   detail: 'user logged in successfully'
          // });
          localStorage.setItem('token',res.access),
          localStorage.setItem('user',JSON.stringify(this.loginForm.value))
          this.router.navigate(['/products'])
        }),
        error:(err=>console.log(err))
      })
    }
  }

  //cancel form
  cancel()
  {
    this.location.back()
  }

}
