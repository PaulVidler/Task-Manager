import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({ // this is a decorator, it is a way for typescript to add metadata to a class
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onselectUser(id: string) {
    console.log(`User name: ${ this.selectedUser?.name} selected`);
    this.selectedUserId = id;
  }
  
}
