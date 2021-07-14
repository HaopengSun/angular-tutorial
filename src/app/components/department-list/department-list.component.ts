import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-department-list',
  template: `
  <h3>Department list (click to see details)</h3>
  <ul *ngFor="let department of departments">
    <li (click)="onSelect(department)">
      <span>{{department.id}}</span>{{department.name}}
    </li>
  </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  public departments: any[] = [
    {"id": 1, "name": "react"},
    {"id": 2, "name": "angular"},
    {"id": 3, "name": "django"},
    {"id": 4, "name": "ruby"},
    {"id": 5, "name": "node"},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(department: any){
    this.router.navigate(['/department', department.id])
  }

}
