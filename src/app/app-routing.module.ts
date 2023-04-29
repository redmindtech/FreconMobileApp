import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SalespersonComponent } from './salesperson/salesperson.component';
import { ProductComponent } from './product/product.component';
import { SalespersoninfoComponent } from './salespersoninfo/salespersoninfo.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'salesperson', component: SalespersonComponent },
  { path: 'product', component: ProductComponent },
  { path: 'salespersoninfo', component: SalespersoninfoComponent },
  { path: 'menu', component: MenuSidebarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
