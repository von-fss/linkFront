import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../../models/Customer';
import { map } from 'rxjs/operators';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly url: string = 'http://127.0.0.1:8080/customer';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Customer[]>(this.url);
  }

  getById(customerId: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.url}/${customerId}`).pipe(take(1));
  }  

  delete(customerId: string) {
    this.http.delete(`${this.url}/${customerId}`).subscribe(dados => console.log(dados));
  }

  update(customerId: string, customer) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': '*/*'
      })
    };
    console.log(JSON.stringify(customer));
    this.http.put(`${this.url}/${customerId}`, JSON.stringify(customer), httpOptions).subscribe(dados => console.log(dados));
  }

  addCustomer(customer) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': '*/*'
      })
    };

    this.http.post(this.url, JSON.stringify(customer), httpOptions).subscribe(dados => console.log(dados));
  }

}
