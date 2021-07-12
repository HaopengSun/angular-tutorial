import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { DepartmentListComponent } from './components/department-list/department-list.component'
import { EmployeeListComponent } from './components/employee-list/employee-list.component'
import { FirstComponent } from './components/first/first.component';

const routes: Routes = [
  {path: 'department', component: DepartmentListComponent},
  {path: 'employee', component: EmployeeListComponent},
  {path: 'first', component: FirstComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
