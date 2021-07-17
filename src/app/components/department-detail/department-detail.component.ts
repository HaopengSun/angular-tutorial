import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentID: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // dropback of snapshot approach, when the param in url is changed,
    // angular decides whether the component should be refreshed
    // let id = parseInt(this.route.snapshot.params.id)
    // this.departmentID = id

    // this.rount.paramMap returns a observable and needs to be subscribed
    // when url is changed, it will detect the change and refresh the page
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id= parseInt(params.get('id') || '')
      this.departmentID = id
    })
  }

  goPrevious(){
    let previousId = this.departmentID - 1
    this.router.navigate(['/department', previousId])
  }

  goNext(){
    let previousId = this.departmentID +1
    this.router.navigate(['/department', previousId])
  }

  goToDepartments(){
    let selectId = this.departmentID ? this.departmentID : null;
    // optional route parameter
    // this.router.navigate(['/department', {id: selectId}]) // http://localhost:4200/department;id=1
    //; id=1 will not affect the view

    // relative route, go back one segement in url (remove /1)
    this.router.navigate(['../', {id: this.departmentID}], {relativeTo: this.route})
  }
}
