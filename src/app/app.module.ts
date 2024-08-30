
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule ({
    declarations: [AppComponent], // if using non-standalone components, add imports here
    bootstrap: [AppComponent],
    // other modules can also be included in the below array
    imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent], // if using standalone components, add imports here. This may be helpful in a gradual porting of a project to standalone compoents
})
export class AppModule {}