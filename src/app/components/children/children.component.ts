import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  // get data from the parent component
  @Input() public parentData: any;

  // another method to use the variable from the parent component
  @Input('parentData') public name: any;

  // event emitter to submit data from the child component to the parent component
  @Output() public childEvent = new EventEmitter();

  public nameSentBack: string = "shuyue"

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit(this.nameSentBack)
  }

}
