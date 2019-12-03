import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/services/message/message.service';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Agendamento } from 'src/app/model/agendamento';
import { Router } from '@angular/router';

@Component({
  selector: 'ngbd-modal-agendar',
  templateUrl: './modal-agendar.html'
})
export class NgbdModalAgendar {

  agendamento: Agendamento
  mensagem: string
  usuario: Usuario
  agendou: boolean
  naoAgendou: boolean

  constructor(private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private messageService: MessageService,
    private agendamentoService: AgendamentoService,
    private userAuth: UserAuthService,
    private route: Router) {

    this.naoAgendou = false;  
    this.agendou = false
    this.usuario = this.userAuth.usuarioAtual()
    this.agendamento = this.agendamentoService.getAgendamentoSelecionado()

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
      this.agendou = true;      
    } catch (e) {
      this.naoAgendou = true;
    }
    setTimeout(() => {
      this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.route.navigateByUrl("/agendamentos")
      })
      this.close()
    }, 3000)
  }

}
