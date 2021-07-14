import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';

import { DepartmentListComponent } from './components/department-list/department-list.component'
import { EmployeeListComponent } from './components/employee-list/employee-list.component'
import { FirstComponent } from './components/first/first.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  // 'empty route' default page. if a wildcart route is requested, this default page will be redirected
  {path: '', redirectTo: '/department', pathMatch: 'full'}, // or prefix
  {path: 'department', component: DepartmentListComponent},
  {path: 'employee', component: EmployeeListComponent},
  // route parameter
  {path:'department/:id', component: DepartmentDetailComponent},
  {path: 'first', component: FirstComponent},
  // deal with wildcart route (which must be the last component in this configuration)
  {path: '**', component: PageNotFoundComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
