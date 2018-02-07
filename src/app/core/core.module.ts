import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MessagesService } from './services/messages.service';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MessagesComponent],
  providers: [MessagesService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule is already loaded. Import it in the AppModule only.`);
    }
  }
}
