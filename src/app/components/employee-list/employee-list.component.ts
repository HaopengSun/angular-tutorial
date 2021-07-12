import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

// component decorator contains injectable decorator so we can use it in line 21
@Component({
  selector: 'app-employee-list',
  template: `
  <h3>Employee List (service practice)</h3>
  <ul *ngFor="let employee of employees">
    <li>{{employee.name}}</li>
  </ul>
  `,
  styles: [
  ]
})
export class EmployeeListComponent implements OnInit {

  public employees: any[] = []

  // declare as dependency
  constructor(private _employeeService: EmployeeService) { }

  // get called when the view is initialized
  ngOnInit(): void {
    this._employeeService.getEmployee()
        .subscribe(data => this.employees = data)
  }

}
