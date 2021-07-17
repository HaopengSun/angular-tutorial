import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { ChildrenComponent } from './components/children/children.component';
import { ParentComponent } from './components/parent/parent.component';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { FirstComponent } from './components/first/first.component'
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { FormsComponent } from './components/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StructuralDirectiveComponent,
    ChildrenComponent,
    ParentComponent,
    DepartmentListComponent,
    EmployeeListComponent,
    FirstComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // CLI adds AppRoutingModule to the AppModule's imports array
    HttpClientModule
  ],
  providers: [
    EmployeeService // register a service in the app modules
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
