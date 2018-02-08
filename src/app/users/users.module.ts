import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { UserArrayService } from './services/user-array.service';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [UserComponent],
  providers: [UserArrayService]
})
export class UsersModule {
}
