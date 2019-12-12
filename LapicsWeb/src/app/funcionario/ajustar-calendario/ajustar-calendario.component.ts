import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modals/modal.service';
import { Agendamento } from 'src/app/model/agendamento';
import { Usuario } from 'src/app/model/usuario';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Semana } from 'src/app/model/semana';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ajustar-calendario',
  templateUrl: './ajustar-calendario.component.html',
  styleUrls: ['./ajustar-calendario.component.css']
})
export class AjustarCalendarioComponent implements OnInit {

  agendamentos: Agendamento[] = []    //Essa variavel armazena todos os agendamentos recebidos da api
  agendamentosCount: number           //Variavel que contem agendamentos.length, usada para validação
  agSegunda: Agendamento[] = []       //Após passar pelos "filtros" esse array contem os agendamentos de segunda
  agTerca: Agendamento[] = []         //Após passar pelos "filtros" esse array contem os agendamentos de terça
  agQuarta: Agendamento[] = []        //Após passar pelos "filtros" esse array contem os agendamentos de quarta
  agQuinta: Agendamento[] = []        //Após passar pelos "filtros" esse array contem os agendamentos de quinta
  agSexta: Agendamento[] = []         //Após passar pelos "filtros" esse array contem os agendamentos de sexta
  agSegundaCount: number              //Essa variavel contem agSegunda.length, utilizada para validação no html
  agTercaCount: number                //Essa variavel contem agTerca.length, utilizada para validação no html
  agQuartaCount: number               //Essa variavel contem agQuarta.length, utilizada para validação no html
  agQuintaCount: number               //Essa variavel contem agQuinta.length, utilizada para validação no html
  agSextaCount: number                //Essa variavel contem agSexta.length, utilizada para validação no html
  agSegundaDisponivel: boolean
  agTercaDisponivel: boolean
  agQuartaDisponivel: boolean
  agQuintaDisponivel: boolean
  agSextaDisponivel: boolean
  semana: any[] = []                  //Esse array de qualquer serve para armazenar os dias da semana atual
  novoAgendamento: Agendamento = new Agendamento()  //O objeto que recebe os parametros do html para ser enviado para o service e cadastrado
  agendamentoSelecionado: Agendamento = new Agendamento()
  terapeutaSelecionado: Usuario       //Terapeuta selecionado para ser cadastrado no agendamento
  terapeutas: Usuario[] = []          //Variavel que contem um array dos terapeutas
  cadastrar: boolean                  //Variavel utilizada para mostra/esconder a "seção" de cadastrar agendamento
  diaSelecionado: any                 //Variavel utilizada na validação do formulario de cadastrar agendamento
  terapeutaEscolhido: boolean                 //Variavel utilizada na validação do formulario de cadastrar agendamento
  criou: boolean
  naoCriou: boolean


  constructor(private modalService: ModalService,
    private agendamentoService: AgendamentoService,
    private usuarioService: UsuarioService,
    private spinner: NgxSpinnerService,
    private route: Router) {

    this.cadastrar = false;           //Dando valores iniciais para as variaveis de validação
    this.diaSelecionado = null;
    this.terapeutaEscolhido = false;
    this.criou = false;
    this.naoCriou = false;
    this.agSegundaDisponivel = false
    this.agTercaDisponivel = false
    this.agQuartaDisponivel = false
    this.agQuintaDisponivel = false
    this.agSextaDisponivel = false

    let curr = new Date
    let week = []

    for (let i = 1; i <= 5; i++) {
      let first = curr.getDate() - curr.getDay() + i
      let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
      week.push(day)
      this.semana.push(day)
    }
    this.agendamentoService.getAgendamentosPorData(week[0], week[4]).subscribe(res => {
      this.agendamentos = res;
      this.agendamentosCount = this.agendamentos.length
      if (this.agendamentos.length != 0) {
        console.log("TEM AGENDAMENTO")
        for (let i = 0; i < this.agendamentos.length; i++) {
          console.log(this.agendamentos[i].dia)
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

  abreCriar() {    //Abre a seção de cadastrar agendamento
    this.modalService.openAjustar()
  }

  editar(id: number){
    this.agendamentoSelecionado = this.agendamentos.find((i => i.idagendamento === id))
    this.agendamentoService.setAgendamentoSelecionado(this.agendamentoSelecionado)
    this.modalService.openEditarAgendamento()
  }

  excluir(id: number){
    this.agendamentoSelecionado = this.agendamentos.find((i => i.idagendamento === id))
    this.agendamentoService.deletarAgendamento(this.agendamentoSelecionado)
    setTimeout(() => {
      this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.route.navigateByUrl("/ajustar-calendario")
      })
    }, 3000)
  }

}
