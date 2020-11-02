import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../../models/Customer';
import { map } from 'rxjs/operators';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url: string = 'http://127.0.0.1:8080/customer';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url).pipe();  
  }

  getById(customerId: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.url}/${customerId}`).pipe();  
  }  

  addCustomer(customer: Customer): Observable<Customer> {
    console.log(customer);
    return this.http.post<Customer>(this.url, JSON.stringify(customer));
  }

}
