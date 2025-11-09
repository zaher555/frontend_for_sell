import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environment';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http=inject(HttpClient)
  
  private url=environment.host
  
  register(form:Register):Observable<Register>
  {
    return this.http.post<Register>(`${this.url}/customers`,form)
  }

  login(form:Login):Observable<any>
  {
    return this.http.post<Login>(`${this.url}/login`,form)
  }
}
