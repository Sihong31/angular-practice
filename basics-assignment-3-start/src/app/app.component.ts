import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hidden = false;
  clickCounter = 1;
  clicks = [];

  constructor() {

  }

  onClick() {
    this.hidden = !this.hidden;
    this.clicks.push(this.clickCounter++);
  }

}
