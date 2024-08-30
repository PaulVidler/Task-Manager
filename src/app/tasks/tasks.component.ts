import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type NewTaskData } from './task/task.model';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  @Output() complete = new EventEmitter<void>();

  isAddingTask = false;

  //private tasksService: TasksService;

  // using DI for the new service
  constructor(private tasksService: TasksService){
  }
  
  selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData){
    this.isAddingTask = false;
  }

}
