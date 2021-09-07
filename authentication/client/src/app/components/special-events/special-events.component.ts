import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import Event from '../../Event'

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  public specials: Event[] = []

  constructor(private _specialEvent: EventService) { }

  ngOnInit(): void {
    this._specialEvent.getSpecials().subscribe(
      res => this.specials = res,
      err => console.log(err)
    )
  }

}
