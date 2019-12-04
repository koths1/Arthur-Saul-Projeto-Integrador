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
  semana: any[] = []                  //Esse array de qualquer serve para armazenar os dias da semana atual
  novoAgendamento: Agendamento = new Agendamento()  //O objeto que recebe os parametros do html para ser enviado para o service e cadastrado
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

          } else if (day == week[1]) {
            console.log("Entrou na terça")
            this.agTerca.push(this.agendamentos[i])

          } else if (day == week[2]) {
            console.log("Entrou na quarta")
            this.agQuarta.push(this.agendamentos[i])

          } else if (day == week[3]) {
            console.log("Entrou na quinta")
            this.agQuinta.push(this.agendamentos[i])

          } else if (day == week[4]) {
            console.log("Entrou na sexta")
            this.agSexta.push(this.agendamentos[i])

          }
        }
      } else {
        console.log("Não tem agendamento ainda!!!")
      }
    })

  }

  ngOnInit() {
  }

  abreCriar() {    //Abre a seção de cadastrar agendamento
    //this.modalService.openAjustar()
    this.cadastrar = true;
  }

  cancelar() {     //Fecha a seção de cadastrar agendamento
    this.cadastrar = false;
  }

  select(dia: any) {   //Seleciona o dia do agendamento
    console.log(dia)
    this.novoAgendamento.dia = dia;
    this.diaSelecionado = dia;
  }

  criarAgendamento() {   //Monta o agendamento com os dados ja inseridos no agendamento com os dados vindos do ngModel do html
    this.terapeutaSelecionado = this.usuarioService.getUsuarioSelecionado()
    try{this.agendamentoService.criarAgendamento(this.novoAgendamento, this.terapeutaSelecionado.idusuario)
      this.criou = true;
      this.spinner.show()
    }catch(e){
      this.naoCriou = true;
    }
    setTimeout(() => {
      this.spinner.hide()
      this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.route.navigateByUrl("/ajustar-calendario")
      })
    }, 5000)
  }

  verificaSelecionado() {
    if (this.novoAgendamento.idterapeuta != null) {
      this.terapeutaEscolhido = true;
    }
  }



}
