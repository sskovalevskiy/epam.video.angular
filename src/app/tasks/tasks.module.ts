import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { TaskListComponent, TaskComponent, TaskArrayService } from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TaskListComponent, TaskComponent],
  providers: [TaskArrayService]
})
export class TasksModule { }
