import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {Customer} from '../../models/Customer';
import {CustomerService} from '../providers/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  customers: Observable<Customer[]>; 
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'tipoPessoa'];
  
  constructor(private customerService: CustomerService) { }
  ngOnInit(): void {
    this.customers = this.customerService.getAll();
  }

}