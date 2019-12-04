import { Component } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/services/message/message.service';
import { Agendamento } from 'src/app/model/agendamento';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';
import { AtaService } from 'src/app/services/ata/ata.service';
import { Ata } from 'src/app/model/ata';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'ngbd-modal-ata',
  templateUrl: './modal-ata.html'
})
export class NgbdModalAta {

  mensagem: string
  agendamento: Agendamento
  participante: Usuario
  terapeuta: Usuario = new Usuario()
  ata: Ata = new Ata()

  constructor(private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private messageService: MessageService,
    private agendamentoService: AgendamentoService,
    private usuarioService: UsuarioService,
    private ataService: AtaService) {
      
      this.agendamento = this.agendamentoService.getAgendamentoSelecionado();
      this.terapeuta = this.agendamentoService.getTerapeuta()
      this.participante = this.agendamentoService.getParticipante() 
      this.ata.idparticipante = this.agendamento.idparticipante
      this.ata.idterapeuta = this.agendamento.idterapeuta
      this.ata.idagendamento = this.agendamento.idagendamento
      this.ata.pic = this.agendamento.terapia            
      
  }

  registrarAta() {
    this.ata.observacoes = (<HTMLSelectElement>document.getElementById('observacoes')).value
    console.log((<HTMLSelectElement>document.getElementById('observacoes')).value)
    try {
      this.ataService.createAta(this.ata)
      setTimeout(() => {
        this.close()
      }, 3000)
    } catch (e) {
    }

  }

  dismiss() {
    this.messageService.removeMessage()
    this.agendamentoService.removeAgendamentoSelecionado()
    this.activeModal.dismiss()
  }

  close() {
    this.agendamentoService.removeAgendamentoSelecionado()
    this.messageService.removeMessage()
    this.activeModal.close()
  }

}
