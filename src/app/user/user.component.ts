import { Component, Input, Output,EventEmitter, output } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// alias or type definition
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

// interface definition
interface User {
  id: string;
  avatar: string;
  name: string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({required: true}) user!: User;


  // this is the old way of declaring an output decorator
  @Output() select = new EventEmitter<string>();
  
  // this is an alternative method of declaring the output decorator using signal
  // it may not be used outside of very modern projects
  //select = output<string>(); 

  // this is an alternative method of declaring the input decorator using signal
  // avatar = input.required<string>();
  // name = input.required<string>();

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
    return './users/' + this.user.avatar; 
  }

  // this below uses signals and is more efficient because it only updates the value when it is needed, not on every change of the component
  //imagePath = computed(() => './users/' + this.avatar());

  onSelectUser() {
    console.log(`User ${this.user.name} selected`);
    this.select.emit(this.user.id);
  }
}
