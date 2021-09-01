import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  public topics: any[] = ['angular', 'react', 'vue']

  // will be prefilled in the form
  public userModel = new User('', 'rob@test.com', 12345, 'react', 'morning', false)

  constructor() { }

  ngOnInit(): void {
  }

}
