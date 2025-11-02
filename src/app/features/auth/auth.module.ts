import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "../shared/shared.module";
import { RouterLink } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { CustomerFormComponent } from "./customer-form/customer-form.component";

@NgModule({
    declarations:[
        RegisterComponent,
        LoginComponent,
        CustomerFormComponent
    ],
    imports:[
        AuthRoutingModule,
        SharedModule,
        RouterLink,
        ReactiveFormsModule,
    ],
    exports:[
        CustomerFormComponent
    ]
})
export class authModule{}