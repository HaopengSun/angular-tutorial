import { Component } from '@angular/core';

// component decorator
// selector: <app-root></app-root>
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// class
export class AppComponent {
  title = 'angular-tutorial';
}
