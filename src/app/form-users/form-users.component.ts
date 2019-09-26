import { Component, OnInit, Output, Input } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../models/user';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.scss']
})
export class FormUsersComponent implements OnInit {
  @Input() type: string;
  @Input() user: User;

  @Output() onSubmit: EventEmitter<User> = new EventEmitter<User>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();

  cancelForm(): void {
    this.cancel.emit(false);
  }

  handleSubmit():void {
    this.onSubmit.emit(this.user);
  }


  constructor() { }

  ngOnInit() {
  }






}
