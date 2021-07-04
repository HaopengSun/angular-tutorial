import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

// template: '<div>Hello World</div>'
// style: `
// div {
//   color: red
// }
// `

export class TestComponent implements OnInit {

  public name: string = 'Haopeng'

  constructor() { }


  // A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
  // Define an ngOnInit() method to handle any additional initialization tasks.
  ngOnInit(): void {
  }

  greetUser(): string {
    return 'Hello ' + this.name
  }

}
