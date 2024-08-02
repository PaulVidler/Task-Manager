import { Component, Input, input } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //@Input({required: true}) avatar!: string;
  //@Input({required: true}) name!: string;

  avatar = input<string>();
  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => './users/' + this.selectedUser().avatar);

  // this is a getter, available in js classes
  // get imagePath(){
  //   // this is a signal, it is a way to get the value of a signal, note the changes on the 
  //   // html to call this value ie: selectedUser().name not selectedUser.name
  //   // signals is a better way to handle state in angular and is faster than using observables
  //   return `./users/${this.selectedUser().avatar}`; 
  // }

  get imagePath(){
    return './users/' + this.avatar; 
  }

  onSelectUser() {
    console.log(`User ${this.name} selected`);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
