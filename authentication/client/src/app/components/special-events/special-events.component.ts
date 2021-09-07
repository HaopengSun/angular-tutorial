import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import Event from '../../Event'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  public specials: Event[] = []

  constructor(private _specialEvent: EventService, private _router: Router) { }

  ngOnInit(): void {
    this._specialEvent.getSpecials().subscribe(
      res => this.specials = res,
      err => {
        if (err instanceof HttpErrorResponse){
          if (err.status === 401){
            this._router.navigate(['login']);
          }
        }
      }
    )
  }

}
