import { Component, OnInit } from "@angular/core";
import { UsersService } from "./users.service";
import { User, defaultUser } from "./models/user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  users: User[] = [];
  userSelected: User = defaultUser();
  showAddForm = false;
  showEditForm = false;
  showRemoveForm = false;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => (this.users = users));
  }

  onNewUser($event: User): void {
    this.showAddForm = false;
    this.usersService.addUser($event).subscribe(user => this.users.push(user))
  }

  onEditUser($event: User): void {
    this.showEditForm = false;
    this.userSelected = defaultUser();
    this.usersService.editUser($event).subscribe();
  }

  onRemoveUser($event: User): void {
    this.users = this.users.filter(u => u !== $event);
    this.userSelected = defaultUser();
    this.showRemoveForm = false;
    this.usersService.removeUser($event).subscribe();
  }

  onClickAddRow(): void {
    this.showAddForm = !this.showAddForm;
  }

  onCancel($event:boolean): boolean {
    this.userSelected = defaultUser();
    return $event;
  }

}
