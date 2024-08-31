
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/card/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule ({
    declarations: [
        AppComponent, 
        HeaderComponent, 
        UserComponent
    ], // if using non-standalone components, add imports here
    bootstrap: [AppComponent],
    // other modules can also be included in the below array
    imports: [BrowserModule, SharedModule, TasksModule], // if using standalone components, add imports here. This may be helpful in a gradual porting of a project to standalone compoents
})
export class AppModule {}