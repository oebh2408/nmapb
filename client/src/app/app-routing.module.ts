import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientFormComponent } from './components/client-form/client-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/clients',
    pathMatch: 'full'
  },
  {
    path: 'clients',
    component: ClientFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
