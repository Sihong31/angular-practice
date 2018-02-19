import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  interval;
  gameCounter = 0;

  constructor() { }

  ngOnInit() {

  }

  onGameStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.gameCounter + 1);
      this.gameCounter++;
    }, 1000);
  }

  onGameEnd() {
    clearInterval(this.interval);
  }

}

// var handle = setInterval(drawAll, 20);
//
// // When you want to cancel it:
// clearInterval(handle);
// handle = 0; // I just do this so I know I've cleared the interval
