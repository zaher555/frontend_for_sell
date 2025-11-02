import { AuthService } from './../services/auth.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}
@Component({
  selector: 'app-register',
  standalone:false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [MessageService]

})
export class RegisterComponent {
  uploadedFiles: any[] = [];
  registerForm!:FormGroup
  //services
  messageService$=inject(MessageService)
  fb=inject(FormBuilder)
  location=inject(Location)
  authService=inject(AuthService)
  constructor()
  {
    //form intialization
    this.registerForm=this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('^[A-Za-z\\u0621-\\u064A\\s]+$')]],
      lastName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('^[A-Za-z\\u0621-\\u064A\\s]+$')]],
      customername:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10),
      Validators.pattern('^(?=.{3,10}$)(?=.*[0-9!@#$%^&*()_+=\\-{}\\[\\]:;"\'<>,.?/~`])(?!.*\\s)[A-Za-z\\u0621-\\u064A][A-Za-z\\u0621-\\u064A0-9!@#$%^&*()_+=\\-{}\\[\\]:;"\'<>,.?/~`]*$')
      ]],
      Email:['',[Validators.required,Validators.email]],
      password:['',[Validators.minLength(8),Validators.required,Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*()_+=\\-{}\\[\\]:;"\'<>,.?/~`])(?!.*\\s).+$')]],
      phone:['',[Validators.required,Validators.maxLength(11),Validators.pattern('^(010|012|015)[0-9]{8}$')]],
      image:['']
    })
  }

  //required error
  get required()
  {
    return 'This field is required'
  }

  onBasicUploadAuto(event:any) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }

      this.messageService$.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  // call api
  signup()
  {
    console.log(this.registerForm.value)
    if(this.registerForm.valid)
    {
      this.authService.register(this.registerForm.value).subscribe({
        next:(res=>{console.log(res)}),
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
