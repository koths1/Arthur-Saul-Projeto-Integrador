import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Agendamento } from 'src/app/model/agendamento';
import { Usuario } from 'src/app/model/usuario';
import { FormPesquisa } from 'src/app/model/formPesquisa';
import { FormularioService } from 'src/app/services/formPesquisa/formulario.service';
import { ModalService } from 'src/app/services/modals/modal.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalAgendar } from 'src/app/modal/modal-agendar/modal-agendar';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  agendamentos: Agendamento[] = []
  agSegunda: Agendamento[] = []
  agTerca: Agendamento[] = []
  agQuarta: Agendamento[] = []
  agQuinta: Agendamento[] = []
  agSexta: Agendamento[] = []
  agSegundaCount: number
  agTercaCount: number
  agQuartaCount: number
  agQuintaCount: number
  agSextaCount: number
  agSegundaDisponivel: boolean
  agTercaDisponivel: boolean
  agQuartaDisponivel: boolean
  agQuintaDisponivel: boolean
  agSextaDisponivel: boolean
  usuario: Usuario
  formulario: FormPesquisa[] = []
  agendamentosCount: number
  escolheu: boolean
  agendamentosEscolhidos: Agendamento[] = []

  constructor(private agendamentoService: AgendamentoService,
    private userAuth: UserAuthService,
    private formularioService: FormularioService,
    private modalService: ModalService,
    private usuarioService: UsuarioService,
    private route: Router,
    private ngbdService: NgbModal) {
    this.usuario = this.userAuth.usuarioAtual()
    this.escolheu = false
    this.agSegundaDisponivel = false
    this.agTercaDisponivel = false
    this.agQuartaDisponivel = false
    this.agQuintaDisponivel = false
    this.agSextaDisponivel = false
    //Problemas com o preenchimento do formulario, por isso essa parte está comentada
    /*this.formularioService.getPreencheu(this.usuario.idusuario).subscribe(res =>{
      this.formulario = res;
      if(this.formulario.length == 0){
        this.route.navigateByUrl("/formulario-pesquisa")
      }
    })*/
    let curr = new Date
    let week = []

    for (let i = 1; i <= 5; i++) {
      let first = curr.getDate() - curr.getDay() + i
      let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
      week.push(day)
    }
    this.agendamentoService.getAgendamentosPorData(week[0], week[4]).subscribe(res => {
      this.agendamentos = res;
      this.agendamentosCount = this.agendamentos.length
      if (this.agendamentos.length != 0) {
        for (let i = 0; i < this.agendamentos.length; i++) {
          let day = new Date(this.agendamentos[i].dia).toISOString().slice(0, 10)
          if (day == week[0]) {
            console.log("Entrou na segunda")
            this.agSegunda.push(this.agendamentos[i])
            if (this.agendamentos[i].disponivel == "sim") {
              this.agSegundaDisponivel = true
            }

          } else if (day == week[1]) {
            console.log("Entrou na terça")
            this.agTerca.push(this.agendamentos[i])
            if (this.agendamentos[i].disponivel == "sim") {
              this.agTercaDisponivel = true
            }

          } else if (day == week[2]) {
            console.log("Entrou na quarta")
            this.agQuarta.push(this.agendamentos[i])
            if (this.agendamentos[i].disponivel == "sim") {
              this.agQuartaDisponivel = true
            }

          } else if (day == week[3]) {
            console.log("Entrou na quinta")
            this.agQuinta.push(this.agendamentos[i])
            if (this.agendamentos[i].disponivel == "sim") {
              this.agQuintaDisponivel = true
            }

          } else if (day == week[4]) {
            console.log("Entrou na sexta")
            this.agSexta.push(this.agendamentos[i])
            if (this.agendamentos[i].disponivel == "sim") {
              this.agSextaDisponivel = true
            }

          }
        }
        //Após colocar os agendamentos de cada dia em seus arrays especificos vamos armazenar o .length de cada array para validação no html
        this.agSegundaCount = this.agSegunda.length
        this.agTercaCount = this.agTerca.length
        this.agQuartaCount = this.agQuarta.length
        this.agQuintaCount = this.agQuinta.length
        this.agSextaCount = this.agSexta.length
      } else {
        console.log("Não tem agendamento ainda!!!")
      }
    })
  }

  ngOnInit() {
  }

  segunda() {
    this.escolheu = true
    this.agendamentoService.setAgendamentosDia(this.agSegunda)
    this.agendamentosEscolhidos = this.agSegunda
    this.modalService.openAgendamento()
  }

  terca() {
    this.escolheu = true
    this.agendamentoService.setAgendamentosDia(this.agTerca)
    this.agendamentosEscolhidos = this.agTerca
    this.modalService.openAgendamento()
  }

  quarta() {
    this.escolheu = true
    this.agendamentoService.setAgendamentosDia(this.agQuarta)
    this.agendamentosEscolhidos = this.agQuarta
    this.modalService.openAgendamento()
  }

  quinta() {
    this.escolheu = true
    this.agendamentoService.setAgendamentosDia(this.agQuinta)
    this.agendamentosEscolhidos = this.agQuinta
    this.modalService.openAgendamento()
  }

  sexta() {
    this.escolheu = true
    this.agendamentoService.setAgendamentosDia(this.agSexta)
    this.agendamentosEscolhidos = this.agSexta
    this.modalService.openAgendamento()
  }

  agendar(id: number) {
    for (let i = 0; i < this.agendamentos.length; i++) {
      if (this.agendamentos[i].idagendamento == id) {
        this.agendamentoService.setAgendamentoSelecionado(this.agendamentos[i])
      }
    }
    this.ngbdService.open(NgbdModalAgendar)
  }

}
