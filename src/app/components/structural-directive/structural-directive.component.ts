import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  public displayName: boolean = false;
  public condition:boolean = false;
  public anotherCondition:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
