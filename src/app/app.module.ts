import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StructuralDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
