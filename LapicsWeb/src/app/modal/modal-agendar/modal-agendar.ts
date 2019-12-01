import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/services/message/message.service';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'ngbd-modal-agendar',
  templateUrl: './modal-agendar.html'
})
export class NgbdModalAgendar {

  mensagem: string
  usuario: Usuario
  agendou: boolean

  constructor(private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private messageService: MessageService,
    private agendamentoService: AgendamentoService,
    private userAuth: UserAuthService) {

    this.usuario = this.userAuth.usuarioAtual()

  }

  dismiss() {
    this.messageService.removeMessage()
    this.activeModal.dismiss()
  }

  close() {
    this.messageService.removeMessage()
    this.activeModal.close()
  }

  agendar(idAgendamento: number) {
    try {
      this.agendamentoService.fazerAgendamento(idAgendamento, this.usuario.idusuario)
      this.mensagem = "Agendamento realizado com sucesso!!!"
    } catch (e) {
      this.mensagem = "Agendamento falhou..."
    }
  }

}
