import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalAgendamento } from './modal-agendamento';


@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdModalAgendamento],
  exports: [NgbdModalAgendamento],
  bootstrap: [NgbdModalAgendamento]
})
export class NgbdModalAgendamentoModule {}
