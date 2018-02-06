import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { TaskArrayService } from './services/task-array.service';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TaskListComponent],
  providers: [TaskArrayService]
})
export class TasksModule { }
