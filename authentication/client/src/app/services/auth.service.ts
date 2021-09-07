import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../User'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = 'http://localhost:3000/api/register'
  private _loginUrl = 'http://localhost:3000/api/login'

  constructor(private http:HttpClient) { }

  registerUser(user: User){
    return this.http.post<User>(this._registerUrl, user)
  }

  loginUser(user: User){
    return this.http.post<User>(this._loginUrl, user)
  }
}