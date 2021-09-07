import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Event from '../Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "http://localhost:3000/api/events";
  private _specialsUrl = "http://localhost:3000/api/special";

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get<Event[]>(this._eventsUrl)
  }

  getSpecials(){
    return this.http.get<Event[]>(this._specialsUrl)
  }
}
