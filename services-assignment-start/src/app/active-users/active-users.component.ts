import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { CountersService } from '../counters.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  activeUsers: string[] = [];

  constructor(private usersService: UsersService) {};

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }
}
