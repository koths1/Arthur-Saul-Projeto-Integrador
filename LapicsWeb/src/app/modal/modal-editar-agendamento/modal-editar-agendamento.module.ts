import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDropdownTerapeuta } from 'src/app/dropdown-terapeutas/dropdown-terapeuta';
import { NgbdDropdownTerapeutaModule } from 'src/app/dropdown-terapeutas/dropdown-terapeuta.module';
import { NgbdModalEditarAgendamento } from './modal-editar-agendamento';


@NgModule({
  imports: [BrowserModule, NgbModule ,NgbdDropdownTerapeutaModule],
  declarations: [NgbdModalEditarAgendamento],
  exports: [NgbdModalEditarAgendamento],
  bootstrap: [NgbdModalEditarAgendamento]
})
export class NgbdModalEditarAgendamentoModule {}
