import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environment';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  url:string=environment.host
  http=inject(HttpClient)
  getAllCategories():Observable<Category[]>
  {
    return this.http.get<Category[]>(`${this.url}/products/categories`)
  }
}
