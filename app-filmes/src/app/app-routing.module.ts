import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFilmesComponent } from './list-filmes/list-filmes.component';


const routes: Routes = [
  { path: '', component: ListFilmesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }