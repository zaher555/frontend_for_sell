import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

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
  //services
  messageService$=inject(MessageService)

    onBasicUploadAuto(event:any) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService$.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
}
