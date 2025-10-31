import { ProductService } from './../service/product.service';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../models/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone:false
})
export class ProductComponent implements OnInit {
    productId!:string
    product!:IProduct
    rateValue:number=2.2
    //services
    activateRoute$=inject(ActivatedRoute)
    productService$=inject(ProductService)

    constructor(){
      this.productId=this.activateRoute$.snapshot.paramMap.get('id')!
    }

    ngOnInit() {
      this.getProductById(this.productId)
    }

    // fetch product
    getProductById(pId:string)
    {
      this.productService$.getProductById(pId).subscribe({
        next:((res:IProduct)=>this.product=res),
        error:(err=>'error fetching product: ' + err)
      })
    }

    getSeverity(product: IProduct) {
        switch (product.status) {
            case 'Available':
                return 'success';

            case 'Not Available':
                return 'danger';

            default:
                return null;
        }
    }
}
