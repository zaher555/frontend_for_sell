import { NgModule } from "@angular/core";
import { ProfileComponent } from "./components/profile.component";
import { ProfileRoutingModule } from "./profile-routing.module";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { authModule } from "../auth/auth.module";

@NgModule({
    declarations:[
        ProfileComponent,
    ],
    imports:[    
        SharedModule,
        ProfileRoutingModule,
        ReactiveFormsModule,
        authModule,
    ],
})

export class ProfileModule
{}