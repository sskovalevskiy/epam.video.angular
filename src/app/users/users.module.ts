import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { UserArrayService } from './services/user-array.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [],
  providers: [UserArrayService]
})
export class UsersModule {
}
