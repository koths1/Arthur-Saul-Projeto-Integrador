import { Component } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/services/message/message.service';
import { Agendamento } from 'src/app/model/agendamento';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';
import { AtaService } from 'src/app/services/ata/ata.service';
import { Ata } from 'src/app/model/ata';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Feedback } from 'src/app/model/feedback';
import { FeedbackService } from 'src/app/services/feedback/feedback.service';

@Component({
  selector: 'ngbd-modal-feedback',
  templateUrl: './modal-feedback.html'
})
export class NgbdModalFeedback {

  mensagem: string
  agendamento: Agendamento
  participante: Usuario
  terapeuta: Usuario
  feedback: Feedback = new Feedback()

  constructor(private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private messageService: MessageService,
    private agendamentoService: AgendamentoService,
    private usuarioService: UsuarioService,
    private feedbackService: FeedbackService) {
      
      this.agendamento = this.agendamentoService.getAgendamentoSelecionado();
      this.terapeuta = this.agendamentoService.getTerapeuta()
      this.participante = this.agendamentoService.getParticipante() 
      this.feedback.idagendamento = this.agendamento.idagendamento
      this.feedback.pic = this.agendamento.terapia            
      
  }

  registrarFeedback() {
    this.feedback.comofoi = (<HTMLSelectElement>document.getElementById('comofoi')).value //Utilizamos essa expressão pois getElementById trás um tipo html
    this.feedback.relate = (<HTMLSelectElement>document.getElementById('relate')).value
    this.feedback.impressao = (<HTMLSelectElement>document.getElementById('impressao')).value
    //console.log((<HTMLSelectElement>document.getElementById('observacoes')).value)
    try {
      this.feedbackService.createFeedback(this.feedback)
      setTimeout(() => {
        this.close()
      }, 3000)
    } catch (e) {
    }

  }

  dismiss() {
    this.agendamentoService.removeAgendamentoSelecionado()
    this.agendamentoService.removeTerapeuta()
    this.agendamentoService.removeParticipante()
    this.messageService.removeMessage()
    this.activeModal.dismiss()
  }

  close() {
    this.agendamentoService.removeAgendamentoSelecionado()
    this.agendamentoService.removeTerapeuta()
    this.agendamentoService.removeParticipante()
    this.messageService.removeMessage()
    this.activeModal.close()
  }

}
