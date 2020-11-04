import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {Customer} from '../../models/Customer';
import {CustomerService} from '../providers/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  customers: Observable<Customer[]>; 
  displayedColumns: string[] = ['_id', 'nome', 'cpf', 'tipoPessoa'];
  
  constructor(private customerService: CustomerService, private router: Router) { }
  ngOnInit(): void {
    this.customers = this.customerService.getAll();
  }

  callEdit(customerId: string) {
    this.router.navigateByUrl(`/editar/${customerId}`);
  }

  callDelete(customerId: string) {
    this.customerService.delete(customerId);
    this.customers = this.customerService.getAll();
  }
}