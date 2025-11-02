import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CartComponent } from "./components/cart.component";
import { cartRoutingModule } from "./cart-routing.module";

@NgModule({
    declarations:[
        CartComponent,
    ],
    imports:[    
        SharedModule,
        cartRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
})

export class CartModule
{}