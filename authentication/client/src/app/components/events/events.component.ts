import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import Event from '../../Event'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public events: Event[] = [];

  constructor(private _eventService: EventService) { }

  ngOnInit(): void {
    this._eventService.getEvents().subscribe(
      res => this.events = res,
      err => console.log(err)
    )
  }

}
