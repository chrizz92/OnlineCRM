import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoGuard } from './account-info.guard';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ClientsComponent } from './clients/clients.component';
import { LeadsGridComponent } from './leads-grid/leads-grid.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { LoansComponent } from './loans/loans.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PreferencesGuardGuard } from './preferences-guard.guard';
import { ProductOneComponent } from './product-one/product-one.component';
import { ProductTwoComponent } from './product-two/product-two.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { SuperAdminGuard } from './super-admin.guard';
import { UnsavedGuard } from './unsaved.guard';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  //All routes are created here
  { 
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path:'loans',
    component: LoansComponent,
  },
  { 
    path:'home',
    component: AppComponent,
  },
  {
    path:'leads',
    component:LeadsGridComponent,
    resolve:{
      data:AccountInfoGuard
    }
  },
  {
    path: 'product/:id',//Dynamic App-Routing with one parameter
    component: ProductComponent
  },
  {
    path: 'product/:id/photos/:photoId',//Dynamic App-Routing with multiple parameters
    component: ProductComponent
  },
  {
    path: 'product/1',
    component: ProductOneComponent
  },
  {
    path: 'product/2',
    component: ProductTwoComponent
  },
  {
    path:'add',
    component: AddLoansComponent,
    outlet: 'addLoan'// load with --> (<outlet>:<path>)
  },
  {
    path:'loans/add',
    component: AddLoansComponent
  },
  {
    path:'clients',
    component: ClientsComponent,
    canActivate: [
      AdminGuard, AuthGuard
    ]//If there are multiple Guards, all of them must be TRUE to enter the Route
  },
  {
    path:'search',
    component: SearchComponent,
    canDeactivate:[
      UnsavedGuard
    ]
  },
  {
    path:'users',
    component: UsersComponent
  },
  {
    path:'loan-types',
    //no component if path has children, can be implented inside children as path:''
    children:[
      {
        path:'add-loan', component: LoanTypesComponent
      },
      {
        path:'edit-loan', component: LoansComponent
      }
    ]
  },
  {
    path:'add-loan',
    redirectTo:''
  },
  {
    path:'admin',
    children:[
      {
        path:'',
        component: AdminComponent,//children must be inside an own object, see next
        canActivate:[
          SuperAdminGuard//separate Access to admin from the children, FALSE does NOT block access to children
        ]
      },
      {
        path:'',
        canActivateChild:[
          AdminAccessGuard
        ],
        children:[
          {
            path:'manage',
            component: AdminManageComponent
          },
          {
            path:'edit',
            component: AdminEditComponent
          }
        ]
      }     
    ]
  },
  {
    path:'add-new-loan',
    redirectTo:'loan-types/add-loan'
  },
  { 
    path: 'payments', 
    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) //Lazy Loading of children
  },
  { 
    path: 'preferences', 
    loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule),
    canLoad:[
      PreferencesGuardGuard
    ]
  },
  { 
    path: 'customers', 
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
  },
  {
    path:'**',//Wildcard needs to be the last route
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
