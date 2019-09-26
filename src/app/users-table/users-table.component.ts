import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  @Input() users: User[]
  @Input() showEdit: boolean;
  @Input() showRemove: boolean;
  @Output() userSelected: EventEmitter<User> = new EventEmitter<User>();
  @Output() flagEdit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() flagRemove: EventEmitter<boolean> = new EventEmitter<boolean>();

  userEditClick(user:User) {
    console.log(user);
    this.userSelected.emit(user);
    this.flagEdit.emit(!this.showEdit);
  }

  userRemoveClick(user:User) {
    console.log(user);
    this.userSelected.emit(user);
    this.flagRemove.emit(!this.showRemove);
  }
  constructor() { }

  ngOnInit() {

  }

}
