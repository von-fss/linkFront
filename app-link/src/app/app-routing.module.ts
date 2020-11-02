import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { FormCustomerComponent } from './form-customer/form-customer.component';

const routes: Routes = [
  { path: '', component: ListCustomerComponent },
  { path: 'cadastro', component: FormCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
