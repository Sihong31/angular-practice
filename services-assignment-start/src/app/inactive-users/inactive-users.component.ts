import { Component, OnInit, DoCheck } from '@angular/core';
import { UsersService } from '../users.service';
import { CountersService } from '../counters.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit, DoCheck {
  inactiveUsers: string[] = [];
  inactiveToActive: number;

  constructor(private usersService: UsersService, private countersService: CountersService){};

  ngOnInit() {
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  ngDoCheck() {
    this.inactiveToActive = this.countersService.inactiveToActive;
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
