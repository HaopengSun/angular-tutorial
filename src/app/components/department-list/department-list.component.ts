import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-department-list',
  template: `
  <h3>Department list (click to see details)</h3>
  <ul *ngFor="let department of departments" class="items">
    <li (click)="onSelect(department)" [class.selected]="isSelected(department)">
      <span>{{department.id}}</span>{{department.name}}
    </li>
  </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  public selectID: number = 0

  public departments: any[] = [
    {"id": 1, "name": "react"},
    {"id": 2, "name": "angular"},
    {"id": 3, "name": "django"},
    {"id": 4, "name": "ruby"},
    {"id": 5, "name": "node"},
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // read the ;id=1
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id= parseInt(params.get('id') || '')
      this.selectID = id
    })
  }

  onSelect(department: any){
    this.router.navigate(['/department', department.id])
  }

  isSelected(department: any): boolean{
    return department.id === this.selectID
  }

}
