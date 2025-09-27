import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'',component:ProductsListComponent},
  {path:':id',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { 
  static readonly components = [
    ProductsListComponent,
    ProductComponent
  ]
}
