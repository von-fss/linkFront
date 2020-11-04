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
  
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  onSubmit(customer) {
      this.customerService.addCustomer(customer.value);
  }

}
