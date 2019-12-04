import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalFeedback } from './modal-feedback';


@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdModalFeedback],
  exports: [NgbdModalFeedback],
  bootstrap: [NgbdModalFeedback]
})
export class NgbdModalFeedbackModule {}
