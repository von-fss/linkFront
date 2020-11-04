import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { FormCustomerComponent } from './form-customer/form-customer.component';
import { FormEditCustomerComponent } from './form-edit-customer/form-edit-customer.component';

const routes: Routes = [
  { path: '', component: ListCustomerComponent },
  { path: 'cadastro', component: FormCustomerComponent },
  { path: 'editar/:id', component: FormEditCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
