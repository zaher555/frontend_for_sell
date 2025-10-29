import { map, Observable } from 'rxjs';
import { observable } from './../../../../../node_modules/rxjs/src/internal/symbol/observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url=environment.host

  constructor(private http:HttpClient) { }

  //fetch all products
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}/products`).pipe(
      map(products => 
        products.map(p => ({
          ...p,
          image: `${this.url}${p.image}`
        }))
      )
    );
  }

  //fetch product by id
  getProductById(pId: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}/products/${pId}`).pipe(
      map(product => {
        product.image = `${this.url}${product.image}`;
        return product;
      })
    );
  }


}
