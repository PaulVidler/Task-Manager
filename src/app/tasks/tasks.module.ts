import { NgModule } from '@angular/core';

import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/card/shared.module';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule ({
    declarations: [NewTaskComponent, TaskComponent, TasksComponent],
    exports: [ TasksComponent], // export the component to be used elsewhere. This is the only one used by the components in app.module.ts
    imports: [ CommonModule, FormsModule, SharedModule ]
})
export class TasksModule {}