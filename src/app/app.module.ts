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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MaterialModule } from './material.module';
import { ProductServiceTableComponent } from './product-service-table/product-service-table.component';
import { SalesPersonTableComponent } from './sales-person-table/sales-person-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SalespersonComponent,
    ProductComponent,
    SalespersoninfoComponent,
    MenuSidebarComponent,
    ProductServiceTableComponent,
    SalesPersonTableComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MaterialModule,
    NgApexchartsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
