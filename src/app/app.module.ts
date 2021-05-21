import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { ProductOneComponent } from './product-one/product-one.component';
import { ProductTwoComponent } from './product-two/product-two.component';
import { ProductThreeComponent } from './product-three/product-three.component';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { LeadsGridComponent } from './leads-grid/leads-grid.component';
//import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoansComponent,
    LoanTypesComponent,
    AddLoansComponent,
    ProductOneComponent,
    ProductTwoComponent,
    ProductThreeComponent,
    ProductComponent,
    ClientsComponent,
    SearchComponent,
    PageNotFoundComponent,
    AdminComponent,
    AdminEditComponent,
    AdminManageComponent,
    LeadsGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    //{provide:LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
