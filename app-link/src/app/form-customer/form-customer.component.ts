import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import {CustomerService} from '../providers/customer.service';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.scss']
})
export class FormCustomerComponent implements OnInit {

  customer: any = {
    nome: null,
    cpf: null,
    tipoPessoa: null
  }
  
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.customer);
    this.customerService.addCustomer(this.customer);
  }

}
