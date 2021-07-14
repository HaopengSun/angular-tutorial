import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// injectable decorator
// service might require another service as dependancies
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = "/assets/employees.json"

  // add HttpClient dependency
  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee[]>{
    // get method returns a obseravble of type Employee array
    // cast the observable data using Employee interface
    return this.http.get<Employee[]>(this._url).pipe(
      // map(this.extractData),
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "serve error")
  }

}
