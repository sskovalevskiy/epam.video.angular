import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { TaskListComponent, TaskComponent, TaskFormComponent, TaskArrayService } from '.';
import {TasksRoutingModule} from "./tasks.routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule
  ],
  declarations: [TaskListComponent, TaskComponent],
  providers: [TaskArrayService]
})
export class TasksModule { }
