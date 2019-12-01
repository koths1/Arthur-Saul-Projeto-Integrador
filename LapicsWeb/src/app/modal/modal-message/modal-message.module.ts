import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalMessage } from './modal-message';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdModalMessage],
  exports: [NgbdModalMessage],
  bootstrap: [NgbdModalMessage]
})
export class NgbdModalMessageModule {}
