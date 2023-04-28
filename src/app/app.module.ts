import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SalespersonComponent } from './salesperson/salesperson.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { SalespersoninfoComponent } from './salespersoninfo/salespersoninfo.component';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SalespersonComponent,
    ProductComponent,
    SalespersoninfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
