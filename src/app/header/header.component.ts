import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    standalone: true, // this is a standalone component, not a module based component. Its a newer feature thats easier to use and more flexible
    styleUrl: './header.component.css'
})

export class HeaderComponent {
  title = 'first-angular-app';
}