import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/services/message/message.service';
import { Mensagem } from 'src/app/model/mensagem';

@Component({
  selector: 'ngbd-agendamento-message',
  templateUrl: './modal-agendamento.html'
})
export class NgbdModalAgendamento {

  mensagem: string

  constructor(private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private messageService: MessageService) {

    this.mensagem = this.messageService.getMessage()

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
