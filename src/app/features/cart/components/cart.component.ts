import { Component } from '@angular/core';
import { ProductService } from '../../products/service/product.service';



interface Column {
    field: string;
    header: string;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  standalone:false
})
export class CartComponent {
 products!: any[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
      // this.productService.getProductsMini().then((data) => {
      //     this.products = data;
      // });
  }

}
