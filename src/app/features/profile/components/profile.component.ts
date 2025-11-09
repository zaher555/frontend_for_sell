import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  standalone:false,
  providers: [MessageService]
})
export class ProfileComponent {
  customerUpdateForm!:FormGroup
  //services
  messageService$=inject(MessageService)
  fb=inject(FormBuilder)
  constructor()
  {
    //form intialization
    this.customerUpdateForm=this.fb.group({
      // firstName:[''],
      // lastName:[''],
      username:[''],
      // email:[''],
      // password:[''],
      // phone:[''],
      // profileImage:['']
    })
  }

  ngOnInit()
  {
    this.customerUpdateForm.patchValue({
      username:'test'
    })
  }


  // onBasicUploadAuto(event: any) {
  //     this.messageService$.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
  // }

  save(){}
}
