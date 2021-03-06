import { Component } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/services/message/message.service';
import { Agendamento } from 'src/app/model/agendamento';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'ngbd-modal-ajustar',
  templateUrl: './modal-ajustar.html'
})
export class NgbdModalAjustar {

  mensagem: string
  agendamento: Agendamento = new Agendamento()
  novoAgendamento: Agendamento = new Agendamento()  //O objeto que recebe os parametros do html para ser enviado para o service e cadastrado
  semana: any[] = []                  //Esse array de qualquer serve para armazenar os dias da semana atual
  diaSelecionado: any                 //Variavel utilizada na validação do formulario de cadastrar agendamento
  terapeutaSelecionado: Usuario       //Terapeuta selecionado para ser cadastrado no agendamento
  criou: boolean
  naoCriou: boolean

  constructor(private modalService: NgbModal,
    private usuarioService: UsuarioService,
    public activeModal: NgbActiveModal,
    private messageService: MessageService,
    private agendamentoService: AgendamentoService,
    private route: Router) {

      this.criou = false;
      this.naoCriou = false;

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
    this.novoAgendamento.dia = dia;
    this.diaSelecionado = dia;
  }

  criarAgendamento() {   //Monta o agendamento com os dados ja inseridos no agendamento com os dados vindos do ngModel do html
    this.novoAgendamento.terapia = (<HTMLSelectElement>document.getElementById('terapia')).value
    this.novoAgendamento.hora = (<HTMLSelectElement>document.getElementById('hora')).value
    this.novoAgendamento.lugar = (<HTMLSelectElement>document.getElementById('lugar')).value
    this.terapeutaSelecionado = this.usuarioService.getUsuarioSelecionado()
    try{this.agendamentoService.criarAgendamento(this.novoAgendamento, this.terapeutaSelecionado.idusuario)
      this.criou = true;
    }catch(e){
      this.naoCriou = true;
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
