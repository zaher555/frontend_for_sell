import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "../shared/shared.module";
import { RouterLink } from "@angular/router";

@NgModule({
    declarations:[
        RegisterComponent,
        LoginComponent
    ],
    imports:[
        AuthRoutingModule,
        SharedModule,
        RouterLink
    ]
})
export class authModule{}