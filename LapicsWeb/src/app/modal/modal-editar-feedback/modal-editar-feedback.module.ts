import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalEditarFeedback } from './modal-editar-feedback';


@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdModalEditarFeedback],
  exports: [NgbdModalEditarFeedback],
  bootstrap: [NgbdModalEditarFeedback]
})
export class NgbdModalEditarFeedbackModule {}
