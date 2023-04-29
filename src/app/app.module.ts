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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SalespersonComponent,
    ProductComponent,
    SalespersoninfoComponent,
    MenuSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
