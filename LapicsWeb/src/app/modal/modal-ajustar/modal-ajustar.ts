import { Component } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/services/message/message.service';
import { Agendamento } from 'src/app/model/agendamento';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';

@Component({
  selector: 'ngbd-modal-ajustar',
  templateUrl: './modal-ajustar.html'
})
export class NgbdModalAjustar {

  mensagem: string
  agendamento: Agendamento = new Agendamento()

  constructor(private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private messageService: MessageService,
    private agendamentoService: AgendamentoService) {

    this.mensagem = this.messageService.getMessage()

  }

  criar() {
    try {
      //this.agendamentoService.criarAgendamento(this.agendamento)
      this.mensagem = "Agendamento criado com sucesso!!!"
    } catch (e) {
      this.mensagem = "Falha ao criar agendamento..."
    }

  }

  dismiss() {
    this.messageService.removeMessage()
    this.activeModal.dismiss()
  }

  close() {
    this.messageService.removeMessage()
    this.activeModal.close()
  }

}
