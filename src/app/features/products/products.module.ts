import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { MessageService } from 'primeng/api';
import { NavComponent } from '../nav/nav.component';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductComponent,
    ProductCardComponent,
    NavComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  providers:[
    MessageService
  ]
})
export class ProductsModule { 
}
