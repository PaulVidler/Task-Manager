import { Component, Output, EventEmitter, inject, Input } from '@angular/core';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>(); // void just means no data emitted
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  private tasksService = inject(TasksService)

  onCancel() {
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTasks(
      {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate,
    }, this.userId
  );
    this.close.emit();
  };

}
