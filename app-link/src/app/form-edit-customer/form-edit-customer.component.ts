import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../providers/customer.service';
import {Customer} from '../../models/Customer';
import { ObjectUnsubscribedError, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-edit-customer',
  templateUrl: './form-edit-customer.component.html',
  styleUrls: ['./form-edit-customer.component.scss']
})
export class FormEditCustomerComponent implements OnInit {

  customers$: Observable<Customer>;
  customerId: string;
  
  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
    this.customers$ = this.customerService.getById(this.route.snapshot.params['id']);
  }

  onSubmit(customerUpdate) {
    console.log(customerUpdate);
    console.log(this.customerId);
    this.customerService.update(this.customerId, customerUpdate.value);
    this.router.navigateByUrl("");
  }

}
