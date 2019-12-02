import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/services/message/message.service';
import { Agendamento } from 'src/app/model/agendamento';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';
import { NgbdModalAgendar } from '../modal-agendar/modal-agendar';

@Component({
  selector: 'ngbd-agendamento-message',
  templateUrl: './modal-agendamento.html'
})
export class NgbdModalAgendamento {

  mensagem: string
  agendamentos: Agendamento[] = []
  agendamentosDisponiveis : Agendamento[] = []
  agendamentosIndisponiveis : Agendamento[] = []
  agendamentosCount: number


  constructor(private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private messageService: MessageService,
    private agendamentosService: AgendamentoService) {

    this.agendamentos =  this.agendamentosService.getAgendamentosDia()
    for(let i=0; i<this.agendamentos.length; i++){
      if(this.agendamentos[i].disponivel == "sim"){
        this.agendamentosDisponiveis.push(this.agendamentos[i])
      }else{
        this.agendamentosIndisponiveis.push(this.agendamentos[i])
      }
    }
    this.agendamentosCount = this.agendamentos.length
    console.log(this.agendamentos)

  }

  agendar(id: number){
    for(let i=0; i<this.agendamentos.length; i++){
      if(this.agendamentos[i].idagendamento == id){
        this.agendamentosService.setAgendamentoSelecionado(this.agendamentos[i])
      }
    } 
    this.modalService.open(NgbdModalAgendar)   
  }

  dismiss() {
    this.agendamentosService.removeAgendamentosDia()
    this.activeModal.dismiss()
  }

  close() {
    this.agendamentosService.removeAgendamentosDia()
    this.activeModal.close()
  }

}
