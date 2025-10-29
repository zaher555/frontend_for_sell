import { Component, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../service/product.service';
import { IProduct } from '../models/iproduct';
import { MenuItem,MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Drawer } from 'primeng/drawer';
import { product_status } from '../models/product_status';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
  standalone:false
})
export class ProductsListComponent implements OnInit,OnDestroy {
  subscription!:Subscription
  products!:IProduct[]
  items!: MenuItem[];

  //price filter
  price1: number = 0;
  price2: number = 0;
  //status filter
  statuses!:product_status[] ;
  selectedStatus!: Number;
  //discount filter
  discount1: number = 0;
  discount2: number = 0;
  //rate filter
  rate1: number = 0;
  rate2: number = 0;
  //filter dialog
  @ViewChild('drawerRef') drawerRef!: Drawer;
  visible: boolean = false;

  productId!:string

  //services
  products$=inject(ProductService)
  messageService=inject(MessageService)
  router$=inject(Router)
  ngOnInit(): void {
    this.getAllProducts()

    //Speed Dial
     this.items = [
            {
                icon: 'pi pi-eye',
                command: (item:any) => {
                    this.router$.navigate(['/products/' + `${this.productId}`]);
                },
            },
            {
                icon: 'pi pi-cart-plus',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-heart',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target:'_blank',
                url: 'https://angular.dev'
            }
        ];
      
      // products statuses
      this.statuses = [
        { id: 'Available', label: 'Available' },
        { id: 'Not Available', label: 'Not Available' },
      ];
  }

  //fetch all products
  getAllProducts()
  {
    this.subscription=this.products$.getAllProducts().subscribe({
      next:((res:IProduct[])=>{
        this.products=res
        console.log(this.products)
      }),
      error:((err=>{
        console.error('Error fetching products:', err);
      }))
    })
  }

  // get Product by id
  getProducts(catId:any)
  {
    console.log(catId)
  }

  // get product id
  getProductId(prdId:string)
  {
    this.productId=prdId
  }
  
  //cancel dialog
  closeCallback(e: Event): void {
    this.drawerRef.close(e);
  }
  // stop subscription
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
