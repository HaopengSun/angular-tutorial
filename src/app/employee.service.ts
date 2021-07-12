import { Injectable } from '@angular/core';

// injectable decorator
// service might require another service as dependancies
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee(){
    return [
      {'id': 1, 'name': 'a', 'age': 20},
      {'id': 2, 'name': 'b', 'age': 25},
      {'id': 3, 'name': 'c', 'age': 30},
      {'id': 4, 'name': 'd', 'age': 35},
      {'id': 5, 'name': 'e', 'age': 40},
    ]
  }
}
