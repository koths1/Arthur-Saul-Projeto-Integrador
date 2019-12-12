import { Component } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/services/message/message.service';
import { Agendamento } from 'src/app/model/agendamento';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'ngbd-modal-editar-agendamento',
  templateUrl: './modal-editar-agendamento.html'
})
export class NgbdModalEditarAgendamento {

  mensagem: string
  agendamento: Agendamento = new Agendamento()
  semana: any[] = []                  //Esse array de qualquer serve para armazenar os dias da semana atual
  diaSelecionado: any                 //Variavel utilizada na validação do formulario de cadastrar agendamento
  terapeutaSelecionado: Usuario       //Terapeuta selecionado para ser cadastrado no agendamento
  editou: boolean
  naoEditou: boolean

  constructor(private modalService: NgbModal,
    private usuarioService: UsuarioService,
    public activeModal: NgbActiveModal,
    private messageService: MessageService,
    private agendamentoService: AgendamentoService,
    private route: Router) {

      this.agendamento = agendamentoService.getAgendamentoSelecionado()

      this.editou = false;
      this.naoEditou = false;

      let curr = new Date
      let week = []
  
      for (let i = 1; i <= 5; i++) {
        let first = curr.getDate() - curr.getDay() + i
        let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
        week.push(day)
        this.semana.push(day)
      }

  }

  select(dia: any) {   //Seleciona o dia do agendamento
    console.log(dia)
    this.agendamento.dia = dia;
    this.diaSelecionado = dia;
  }

  editarAgendamento() {   //Monta o agendamento com os dados ja inseridos no agendamento com os dados vindos do ngModel do html
    this.agendamento.terapia = (<HTMLSelectElement>document.getElementById('terapia')).value
    this.agendamento.hora = (<HTMLSelectElement>document.getElementById('hora')).value
    this.agendamento.lugar = (<HTMLSelectElement>document.getElementById('lugar')).value
    this.terapeutaSelecionado = this.usuarioService.getUsuarioSelecionado()
    try{this.agendamentoService.editarAgendamento(this.agendamento)
      this.mensagem = "Agendamento alterado com sucesso!!!"
      this.editou = true;
    }catch(e){
      this.mensagem = "Não foi possivel alterar o agendamento, por favor verifique os campos.."
      this.naoEditou = true;
    }
    setTimeout(() => {
      this.close()
      this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.route.navigateByUrl("/ajustar-calendario")
      })
    }, 3000)
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
